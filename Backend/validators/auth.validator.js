const { body } = require("express-validator");

const registerValidator = [
     body("fullname")
     .notEmpty()
     .withMessage("full name is required")
     .trim()
     .isLength({min:3,max:30})
     .withMessage("fullname must be  between 3 and 30 characters "),

     body("email")
       .notEmpty()
     .withMessage("email is required")
      .trim()
     .isEmail()
     .withMessage("email is Invalid")
     .normalizeEmail(),

     body("password")
     .notEmpty()
     .withMessage("password is required")
     .isLength({min:8,max:20})
     .withMessage("password  must be between 8 and 20 characters")

];

const loginValidator=[
       body("email")
       .notEmpty()
       .withMessage("email is required")
       .trim()
       .normalizeEmail()
       .isEmail()
       .withMessage("email si invalid "),

       body("password")
       .notEmpty()
       .withMessage("password is required")
       .isLength({min:8})
];

const forgetPasswordValidator=[
       body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required.")
    .normalizeEmail()
    .isEmail()
    .withMessage("Invalid email.")
];

const resetPasswordValidator=[
      body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required.")
    .normalizeEmail()
    .isEmail()
    .withMessage("Invalid email."),

  body("otp")
    .trim()
    .notEmpty()
    .withMessage("OTP is required.")
    .isLength({ min: 6, max: 6 })
    .withMessage("OTP must be exactly 6 digits.")
    .isNumeric()
    .withMessage("OTP must contain only numbers."),

  body("newPassword")
    .trim()
    .notEmpty()
    .withMessage("New password is required.")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be between 8 and 20 characters.")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter.")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one lowercase letter.")
    .matches(/[0-9]/)
    .withMessage("Password must contain at least one number.")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Password must contain at least one special character.")
];

const verifyOtpValidator=[
     body("email")
     .notEmpty()
     .withMessage("email is required")
     .isEmail()
     .withMessage("email is invalid")
     .trim()
     .normalizeEmail(),

     body("otp")
     .notEmpty()
     .withMessage("opt is required")
      .isLength({min:6,max:6})
      .isNumeric()
      .withMessage("it should be number not alphabetic")
];

const resendOtpValidator = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required.")
    .normalizeEmail()
    .isEmail()
    .withMessage("Invalid email.")
];

module.exports = {
    registerValidator,
    loginValidator,
    forgetPasswordValidator,
    resetPasswordValidator,
    verifyOtpValidator,
    resendOtpValidator
};
