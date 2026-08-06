const { body } = require("express-validator");

const ordervalidation = [

  body("stockId")
    .notEmpty()
    .withMessage("Stock is required.")
    .bail()
    .isMongoId()
    .withMessage("Invalid stock id."),

  body("quantity")
    .notEmpty()
    .withMessage("Quantity is required.")
    .bail()
    .isInt({ min: 1 })
    .withMessage("Quantity must be at least 1."),

  body("side")
    .isIn(["BUY", "SELL"])
    .withMessage("Side must be BUY or SELL."),

  body("orderType")
    .isIn(["MARKET", "LIMIT"])
    .withMessage("Order type must be MARKET or LIMIT."),

];

module.exports = {
  ordervalidation,
};