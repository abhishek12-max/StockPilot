const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const generateOtp = require("../utils/generateOtp");
const sendMail = require("../utils/sendMail");
const register= async (req,res,next) => {
     try {
         const error= validationResult(req);
         if(!error.isEmpty()){
            return res.status(400).json({
                error:error.array()
            })
         }
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
         const error= validationResult(req);
         if(!error.isEmpty()){
             return res.status(400).json({
                "success":false,
                error:error.array()
             })
         }

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
        
    } catch (error) {
        next(error)
    }
}


const forgetPassword= async (req,res,next) => {
      try {
        
      } catch (error) {
        next(error)
      }
}

const resetPassword= async (req,res,next) => {
     try {
        
     } catch (error) {
        next(error)
     }
}

const resendOtp= async (req,res,next) => {
      try {
        
      } catch (error) {
        next(error)
      }
} 

const refreshToken= async (req,res,next) => {
     try {
        
     } catch (error) {
        next(error)
     }
}

const logout= async (req,res,next) => {
    try {
        
    } catch (error) {
        next(error)
    }
}

const me= async (req,res,next) => {
    try {
        
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
    logout
}