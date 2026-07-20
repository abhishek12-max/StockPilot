const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const generateOtp = require("../utils/generateOtp");
const sendMail = require("../utils/sendMail");
const jwt= require("jsonwebtoken");
const { generateAccessToken, generateRefreshToken } = require("../utils/generatetoken");
const imagekit = require("../config/imagekit");
const register= async (req,res,next) => {
     try {
         
        const{fullname,email,password}= req.body
         const existinguser= await  userModel.findOne({
             email
         })
         if(existinguser){
             if(existinguser.isVerified==true){
                return res.status(409).json({
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
const login= async (req,res,next) => {
    try {
       
       const {email,password}= req.body;
       const User= await userModel.findOne({
        email
       })
       if(!User){
           return res.status(401).json({
            "success": false,
            message:"Invalid Email or Password"
           })
       }
        if(User.isVerified===false){
           return res.status(403).json({
            "success":false,
            message:"Please verify your email first"
           })
        }
        const isMatch= await bcrypt.compare(password,User.password);
        if(!isMatch){
            return res.status(401).json({
                "success":false,
                message:"Invalid Email or Password"
            })
        }
         const accessToken= generateAccessToken(User);
         const refreshToken= generateRefreshToken(User);
         User.refreshToken= refreshToken
         await User.save();
          res.cookie("accessToken", accessToken, {
            httpOnly: true,
           secure: false,         
           sameSite: "lax"
         });
          res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
           secure: false,         
           sameSite: "lax"
         });
          res.status(200).json({
            "success":true,
            message:"login successfull"
        })
    } catch (error) {
        next(error)
    }
}


const forgetPassword= async (req,res,next) => {
      try {
       
        const {email}= req.body
         const existingUser= await UserModel.findOne({
            email
         });
          if(!existingUser){
            return res.status(400).json({
                message:"not found"
            })
         }
            const otp= generateOtp();
             const otpExpiry= new Date(Date.now()+5*60*1000);
             existingUser.otp=otp;
             existingUser.otpExpiry=otpExpiry
             await existingUser.save();
             await sendMail(email,"Reset Your Password",`OTP sent successfully for password reset.${otp} this is valid for 5 minutes`);
             return res.status(200).json({
                message:"a new otp has been sent to  your email"
             })
         
         
      } catch (error) {
        next(error)
      }
}

const resetPassword= async (req,res,next) => {
     try {
        
         const{email,otp,newpassword}=req.body
        const existingUser=await UserModel.findOne({
            email
        });
         if(!existingUser){
              return res.status(404).json({
                message:"not found"
              })
         }

         if(existingUser.otp!==otp){
             return res.status(400).json({
                message:"invalid"
             })
         }
         if(new Date()>existingUser.otpExpiry){
            return res.status(400).json({
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

const refreshToken= async (req,res,next) => {
     try {
        
         const token= req.cookies.refreshToken;
      if(!token){
        return res.status(401).json({
            message:"unauthozired"
        })
      }
      const decoded= jwt.verify(token,process.env.REFRESH_TOKEN_SECRET);
      const user= await userModel.findById(decoded.id);
        if(!user){
            return res.status(400).json({
                message:"not found"
            })
        }
        if (user.refreshToken !== token) {
    return res.status(401).json({
        message: "Invalid Refresh Token"
    });
    }
    const accessToken= generateacesstoken(user);
     res.cookie("accessToken",accessToken,{
        
            httpOnly:true,
            secure:false,
            sameSite:"lax"   
     })
     res.status(200).json({
        message:"Access token refresh"
     })
     } catch (error) {
        next(error)
     }
}

const logout= async (req,res,next) => {
    try {
         req.user.refreshToken=null
         await req.user.save();
         res.clearCookie("accessToken");
         res.clearCookie("refreshToken");
         res.status(200).json({
            message:"logout successfull"
         })
    } catch (error) {
        next(error)
    }
}

const me= async (req,res,next) => {
    try {
        res.status(200).json({
          success: true,
          message: "Profile fetched successfully.",
          user: {
            fullname: req.user.fullname,
            email: req.user.email
          }
       })
    } catch (error) {
        next(error)
    }
}

const uploadProfileimage= async (req,res,next) => {
      try {
       
        if(!req.file){
            return res.status(400).json({
                "success":false,
                message:"Profile image is required"
            })
        }
           const oldFileId= req.user.profileImageFileId;
        const uploadedImage= await imagekit.upload({
            file:req.file.buffer,
            fileName:`${req.user._id}-${Date.now()}`
        });
              req.user.profileImage= uploadedImage.url
            req.user.profileImageFileId= uploadedImage.fileId
            await req.user.save();
           
            if (oldFileId) {
                  try {
                    await imagekit.deleteFile(oldFileId);
                   } catch (error) {
                    console.error("Failed to delete old image:", error);
                }
             }
          return res.status(200).json({
              success: true,
           message: "Profile image uploaded successfully",
           profileImage: req.user.profileImage
          });
      } catch (error) {
        next(error)
      }
}


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
    updateProfile
}