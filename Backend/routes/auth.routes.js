const express = require("express");
const router = express.Router();

const { register ,verifyOtp,login,resetPassword,forgetPassword,resendOtp,refreshToken,me,logout} = require("../controllers/auth.controller");
const { registerValidator } = require("../validators/auth.validator");

router.post("/register", registerValidator, register);
router.post("/verify-Otp",verifyOtp);
router.post("/login",login);
router.post("/forget-password",forgetPassword);
router.post("/reset-password",resetPassword);
router.post("/resend-otp",resendOtp);
router.post("/refresh-token",refreshToken);
router.get("/me",me);
router.post("/logout",logout);
module.exports = router;