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
  updateProfileValidator,
} = require("../validators/auth.validator");

const authmiddleware = require("../middlewares/auth.middleware");
const validationMiddleware = require("../middlewares/validation.middleware");

// ================= AUTH =================

router.post(
  "/register",
  registerValidator,
  validationMiddleware,
  register
);

router.post(
  "/verify-Otp",
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
  resendOtp
);

router.post(
  "/refresh-token",
  refreshToken
);

// ================= PROFILE =================

router.get(
  "/profile",
  authmiddleware,
  me
);

router.patch(
  "/profile",
  authmiddleware,
  updateProfileValidator,
  validationMiddleware,
  updateProfile
);

// ================= LOGOUT =================

router.post(
  "/logout",
  authmiddleware,
  logout
);

module.exports = router;