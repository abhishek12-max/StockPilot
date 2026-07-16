const userModel = require("../models/user.model");
const UserModel= require("../models/user.model");
const {validationResult}= require("../validators/auth.validator");
const bcrypt= require("bcrypt");
const register= async (req,res,next) => {
     try {
        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array()
            });
        }
        
        const{fullname,email ,password,profileImage}= req.body;
        const existingUser= await userModel.findOne({
            email
        })
       if(existingUser){
          return res.status(400).json({
            message:"already email exists"
          })
       }
       const hashedPassword= await bcrypt.hash(password,10);
       const otp= generateOtp();
       const otpExpiry= new Date(Date.now()+10*60*1000);
       const user= await userModel.create({
           fullname,
           email,
           password,
           profileImage
       })
       
     } catch (error) {
        next(error)
     }
}

const verifyOtp= async (req,res,next) => {
     try {
        
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