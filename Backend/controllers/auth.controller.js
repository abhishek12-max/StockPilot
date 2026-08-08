const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const generateOtp = require("../utils/generateOtp");
const sendMail = require("../utils/sendMail");
const jwt= require("jsonwebtoken");
const { generateAccessToken, generateRefreshToken } = require("../utils/generatetoken");

const register = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { fullname, email, password } = req.body;

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      if (existingUser.isVerified) {
        return res.status(409).json({
          success: false,
          message: "User already registered",
        });
      }

      const otp = generateOtp();
      const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

      existingUser.fullname = fullname;
      existingUser.password = await bcrypt.hash(password, 10);
      existingUser.otp = otp;
      existingUser.otpExpiry = otpExpiry;

      await existingUser.save();

      await sendMail(
        email,
        "Verify your StockPilot Account",
        `Your OTP is ${otp}. It is valid for 5 minutes.`
      );

      return res.status(200).json({
        success: true,
        message: "A new OTP has been sent to your email.",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const otp = generateOtp();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    await userModel.create({
      fullname,
      email,
      password: hashPassword,
      otp,
      otpExpiry,
    });

    await sendMail(
      email,
      "Verify your StockPilot Account",
      `Your OTP is ${otp}. It is valid for 5 minutes.`
    );

    return res.status(201).json({
      success: true,
      message: "Registration successful. Please verify your email.",
    });

  } catch (error) {
    next(error);
  }
};
    

const verifyOtp = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { email, otp } = req.body;

    const existingUser = await userModel.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (existingUser.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Email already verified",
      });
    }

    if (existingUser.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (new Date() > existingUser.otpExpiry) {
      return res.status(400).json({
        success: false,
        message: "OTP expired",
      });
    }

    existingUser.isVerified = true;
    existingUser.otp = undefined;
    existingUser.otpExpiry = undefined;

    await existingUser.save();

    return res.status(200).json({
      success: true,
      message: "Email verified successfully",
    });

  } catch (error) {
    next(error);
  }
};


const login = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    if (!user.isVerified) {
      return res.status(403).json({
        success: false,
        message: "Please verify your email first",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Generate Tokens
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    // Save Refresh Token
    user.refreshToken = refreshToken;
    await user.save();

    // Cookie Options
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite:
        process.env.NODE_ENV === "production" ? "none" : "lax",
      path: "/",
    };

    // Set Cookies
    res.cookie("accessToken", accessToken, {
      ...cookieOptions,
      maxAge: 15 * 60 * 1000,
    });

    res.cookie("refreshToken", refreshToken, {
      ...cookieOptions,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        plan: user.plan,
      },
    });

  } catch (error) {
    next(error);
  }
};

const forgetPassword = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { email } = req.body;

    const existingUser = await userModel.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const otp = generateOtp();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    existingUser.otp = otp;
    existingUser.otpExpiry = otpExpiry;

    await existingUser.save();

    await sendMail(
      email,
      "Reset Your StockPilot Password",
      `Your OTP is ${otp}. It is valid for 5 minutes.`
    );

    return res.status(200).json({
      success: true,
      message: "Password reset OTP sent successfully.",
    });

  } catch (error) {
    next(error);
  }
};

const resetPassword = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { email, otp, newpassword } = req.body;

    const existingUser = await userModel.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (existingUser.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (new Date() > existingUser.otpExpiry) {
      return res.status(400).json({
        success: false,
        message: "OTP expired",
      });
    }

    const hashPassword = await bcrypt.hash(newpassword, 10);

    existingUser.password = hashPassword;
    existingUser.otp = undefined;
    existingUser.otpExpiry = undefined;
    existingUser.refreshToken = "";

    await existingUser.save();

    return res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });

  } catch (error) {
    next(error);
  }
};

const resendOtp = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { email } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "User already verified",
      });
    }

    const otp = generateOtp();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    user.otp = otp;
    user.otpExpiry = otpExpiry;

    await user.save();

    await sendMail(
      email,
      "Verify your StockPilot Account",
      `Your OTP is ${otp}. It is valid for 5 minutes.`
    );

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });

  } catch (error) {
    next(error);
  }
};
 

const refreshToken = async (req, res, next) => {
  try {
    const token = req.cookies.refreshToken;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await userModel.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.refreshToken !== token) {
      return res.status(401).json({
        success: false,
        message: "Invalid refresh token",
      });
    }

    const accessToken = generateAccessToken(user._id);

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite:
        process.env.NODE_ENV === "production" ? "none" : "lax",
      path: "/",
    };

    res.cookie("accessToken", accessToken, {
      ...cookieOptions,
      maxAge: 15 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Access token refreshed successfully",
    });

  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    req.user.refreshToken = "";
    await req.user.save();

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite:
        process.env.NODE_ENV === "production" ? "none" : "lax",
      path: "/",
    };

    res.clearCookie("accessToken", cookieOptions);
    res.clearCookie("refreshToken", cookieOptions);

    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });

  } catch (error) {
    next(error);
  }
};




const me = async (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Profile fetched successfully",
      user: {
        id: req.user._id,
        fullname: req.user.fullname,
        email: req.user.email,
        plan: req.user.plan,
        isVerified: req.user.isVerified,
        createdAt: req.user.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};




const updateProfile = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { fullname } = req.body;

    req.user.fullname = fullname;

    await req.user.save();

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: {
        fullname: req.user.fullname,
        email: req.user.email,
        plan: req.user.plan,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports={
    register,
    verifyOtp,
    login,
    forgetPassword,
    resetPassword,
    resendOtp,
    refreshToken,
    me,
    logout,
    updateProfile,
   
}