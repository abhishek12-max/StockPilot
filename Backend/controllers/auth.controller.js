const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const generateOtp = require("../utils/generateOtp");
const sendMail = require("../utils/sendMail");
const jwt= require("jsonwebtoken");
const { generateAccessToken, generateRefreshToken } = require("../utils/generatetoken");

const register= async (req,res,next) => {
     try {
         
        const{fullname,email,password}= req.body
         const existinguser= await  userModel.findOne({
             email
         })
         if(existinguser){
             if(existinguser.isVerified==true){
                return res.status(409).json({
                    "success":false,
                    message:"already register"
                })
             }
             if(existinguser.isVerified==false){
                const otp= generateOtp();
                const otpExpiry=  new Date(Date.now()+5*60*1000);
                 existinguser.otp= otp;
                 existinguser.otpExpiry=otpExpiry;
                 await existinguser.save()
                 await sendMail(email,"Email verification",`your otp is ${otp} this is valid for 5 minutes`);
                 return res.status(200).json({
                    "success":true,
                    message:"a new otp has been sent to  your email"
                 })
                }
         }
         const hashpassword= await bcrypt.hash(password,10);
         const otp= generateOtp();
         const otpExpiry= new Date(Date.now()+5*60*1000);
         const user=  await userModel.create({
            fullname,
             email,
             password:hashpassword,
             otp,
             otpExpiry
         })
         await sendMail(email,"Email verification",`your otp is ${otp} this is valid for 5 minutes`)
         res.status(201).json({
            "success":true,
            message:"Registration successful. Please verify your email, using the OTP sent to your email."

         })
     } catch (error) {
        next(error)
     }
} 
    

const verifyOtp= async (req,res,next) => {
     try {
         
         const {email,otp}= req.body;
        
         const existingUser= await userModel.findOne({
            email
         });
         if(!existingUser){
            return  res.status(404).json({
                "success":false,
                message:" User not found"
            })
         }
         if(existingUser.isVerified){
             return res.status(400).json({
                "success":false,
                message:"email is already verified"
             })
         }

         if(existingUser.otp!==otp){
             return res.status(400).json({
                "success":false,
                message:"invalid otp"
             })
         }
         if(new Date()>existingUser.otpExpiry){
              return res.status(400).json({
                "success":false,
                message:"OTP expired"
              })
         }

         existingUser.isVerified= true
         existingUser.otp=null
         existingUser.otpExpiry=null
         await existingUser.save();
         res.status(200).json({
            "success":true,
            message:"Email verified sucessfully"
         })

     } catch (error) {
        next(error)
     }
}
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const User = await userModel.findOne({ email });

    if (!User) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    if (!User.isVerified) {
      return res.status(403).json({
        success: false,
        message: "Please verify your email first",
      });
    }

    const isMatch = await bcrypt.compare(password, User.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const accessToken = generateAccessToken(User);
    const refreshToken = generateRefreshToken(User);

    User.refreshToken = refreshToken;
    await User.save();

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    };

    res.cookie("accessToken", accessToken, {
      ...cookieOptions,
      maxAge: 10 * 60 * 1000,
    });

    res.cookie("refreshToken", refreshToken, {
      ...cookieOptions,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
    });

  } catch (error) {
    next(error);
  }
};

const forgetPassword= async (req,res,next) => {
      try {
       
        const {email}= req.body
         const existingUser= await userModel.findOne({
            email
         });
          if(!existingUser){
            return res.status(400).json({
                "success":false,
                message:"not found"
            })
         }
            const otp= generateOtp();
             const otpExpiry= new Date(Date.now()+5*60*1000);
             existingUser.otp=otp;
             existingUser.otpExpiry=otpExpiry
             await existingUser.save();
            await sendMail(
  email,
  "Reset Your Password",
  `
  <h2>TradeX Password Reset</h2>
  <p>Your OTP is:</p>

  <h1>${otp}</h1>

  <p>This OTP will expire in <b>5 minutes</b>.</p>

  <p>If you didn't request this, ignore this email.</p>
  `
);
             return res.status(200).json({
                "success":true,
                message:"a new otp has been sent to  your email"
             })
         
         
      } catch (error) {
        next(error)
      }
}

const resetPassword= async (req,res,next) => {
     try {
        
         const{email,otp,newpassword}=req.body
        const existingUser=await userModel.findOne({
            email
        });
         if(!existingUser){
              return res.status(404).json({
                "success":false,
                message:"not found"
              })
         }

         if(existingUser.otp!==otp){
             return res.status(400).json({
                "success":false,
                message:"invalid"
             })
         }
         if(new Date()>existingUser.otpExpiry){
            return res.status(400).json({
                "success":false,
                message:"otp exipred"
            })
        }
        const hashpassword= await bcrypt.hash(newpassword,10);
         existingUser.password= hashpassword;
         existingUser.otp= undefined
         existingUser.otpExpiry=undefined
         existingUser.refreshToken=""
         await existingUser.save();

         return res.status(200).json({
            "success":true,
            message:"your password sucessfully reset"
         })
     } catch (error) {
        next(error)
     }
}

const resendOtp= async (req,res,next) => {
      try {
       
         const {email}= req.body;
         const user= await userModel.findOne({
            email
         })
         if(!user){
            return res.status(404).json({
                "success":false,
                message:"user not found"
            })
         }
         if(user.isVerified){
             return res.status(400).json({
                  "success":false,
                 message:"user already Verified"
             })
            }
            const otp= generateOtp();
            const otpExpiry= new Date(Date.now()+5*60*1000);
             user.otp=otp;
             user.otpExpiry=otpExpiry
            await user.save();
            await sendMail(email,otp);
            res.status(200).json({
                "success":true,
                message:"Otp send successfully"
            })
      } catch (error) {
        next(error)
      }
} 

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
        message: "Invalid Refresh Token",
      });
    }

    const accessToken = generateAccessToken(user);

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    };

    res.cookie("accessToken", accessToken, {
      ...cookieOptions,
      maxAge: 10 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Access token refreshed",
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
      secure: true,
      sameSite: "none",
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
      console.log(req.user);
    res.status(200).json({
      success: true,
      message: "Profile fetched successfully.",
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




const updateProfile= async (req,res,next) => {
    try {
      
        const {fullname}= req.body
        req.user.fullname= fullname
        await req.user.save();
        res.status(200).json({
            "success":true,
            user:{
                fullname:req.user.fullname,
                
            },
            message: "Profile updated successfully"
        })
    } catch (error) {
        next(error)
    }
}

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