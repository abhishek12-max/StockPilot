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

];

const forgetPasswordValidator=[

];

const resetPasswordValidator=[

];

const verifyOtpValidator=[

];

module.exports = {
    registerValidator,
    loginValidator,
    forgetPasswordValidator,
    resetPasswordValidator,
    verifyOtpValidator,
};
