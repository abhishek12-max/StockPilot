const express = require("express");

const router = express.Router();

const {
  register,
  verifyOtp,
  login,
  resetPassword,
  forgetPassword,
  resendOtp,
  refreshToken,
  me,
  logout,
  updateProfile,
} = require("../controllers/auth.controller");

const {
  registerValidator,
  verifyOtpValidator,
  loginValidator,
  forgetPasswordValidator,
  resetPasswordValidator,
  resendOtpValidator,
  updateProfileValidator,
} = require("../validators/auth.validator");

const authMiddleware = require("../middlewares/auth.middleware");
const validationMiddleware = require("../middlewares/validation.middleware");

// ================= AUTH =================

router.post(
  "/register",
  registerValidator,
  validationMiddleware,
  register
);

router.post(
  "/verify-otp",
  verifyOtpValidator,
  validationMiddleware,
  verifyOtp
);

router.post(
  "/login",
  loginValidator,
  validationMiddleware,
  login
);

router.post(
  "/forget-password",
  forgetPasswordValidator,
  validationMiddleware,
  forgetPassword
);

router.post(
  "/reset-password",
  resetPasswordValidator,
  validationMiddleware,
  resetPassword
);

router.post(
  "/resend-otp",
  resendOtpValidator,
  validationMiddleware,
  resendOtp
);

router.post(
  "/refresh-token",
  refreshToken
);

// ================= PROFILE =================

router.get(
  "/profile",
  authMiddleware,
  me
);

router.patch(
  "/profile",
  authMiddleware,
  updateProfileValidator,
  validationMiddleware,
  updateProfile
);

// ================= LOGOUT =================

router.post(
  "/logout",
  authMiddleware,
  logout
);

module.exports = router;