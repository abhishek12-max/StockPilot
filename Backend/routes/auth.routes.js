const express = require("express");
const router = express.Router();

const { register ,verifyOtp,login,resetPassword,forgetPassword,resendOtp,refreshToken,me,logout} = require("../controllers/auth.controller");
const { registerValidator, verifyOtpValidator, loginValidator, forgetPasswordValidator, resetPasswordValidator } = require("../validators/auth.validator");
const authmiddleware = require("../middlewares/auth.middleware");

router.post("/register", registerValidator, register);
router.post("/verify-Otp",verifyOtpValidator,verifyOtp);
router.post("/login",loginValidator,login);
router.post("/forget-password",forgetPasswordValidator,forgetPassword);
router.post("/reset-password",resetPasswordValidator,resetPassword);
router.post("/resend-otp",resendOtp);
router.post("/refresh-token",refreshToken);
router.get("/me",authmiddleware,me);
router.post("/logout",logout);
module.exports = router;