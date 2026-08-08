const { body } = require("express-validator");

const registerValidator = [
  body("fullname")
    .trim()
    .notEmpty()
    .withMessage("Full name is required")
    .isLength({ min: 3, max: 30 })
    .withMessage("Full name must be between 3 and 30 characters"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email")
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be between 8 and 20 characters"),
];

const loginValidator = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email")
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("Password is required"),
];

const verifyOtpValidator = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email")
    .normalizeEmail(),

  body("otp")
    .notEmpty()
    .withMessage("OTP is required")
    .isLength({ min: 6, max: 6 })
    .withMessage("OTP must be exactly 6 digits")
    .isNumeric()
    .withMessage("OTP must contain only numbers"),
];

const forgetPasswordValidator = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email")
    .normalizeEmail(),
];

const resendOtpValidator = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email")
    .normalizeEmail(),
];

const resetPasswordValidator = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email")
    .normalizeEmail(),

  body("otp")
    .notEmpty()
    .withMessage("OTP is required")
    .isLength({ min: 6, max: 6 })
    .withMessage("OTP must be exactly 6 digits")
    .isNumeric()
    .withMessage("OTP must contain only numbers"),

  body("newPassword")
    .notEmpty()
    .withMessage("New password is required")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be between 8 and 20 characters"),
];

const updateProfileValidator = [
  body("fullname")
    .trim()
    .notEmpty()
    .withMessage("Full name is required")
    .isLength({ min: 3, max: 30 })
    .withMessage("Full name must be between 3 and 30 characters"),
];



module.exports = {
  registerValidator,
  loginValidator,
  verifyOtpValidator,
  forgetPasswordValidator,
  resendOtpValidator,
  resetPasswordValidator,
  updateProfileValidator,
 
};