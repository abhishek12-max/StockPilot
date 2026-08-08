const { body, param } = require("express-validator");

const addToWatchlistValidator = [
  body("stockId")
    .notEmpty()
    .withMessage("Stock id is required.")
    .bail()
    .isMongoId()
    .withMessage("Invalid stock id."),
];

const deleteWatchlistValidator = [
  param("stockId")
    .notEmpty()
    .withMessage("Stock id is required.")
    .bail()
    .isMongoId()
    .withMessage("Invalid stock id."),
];

module.exports = {
  addToWatchlistValidator,
  deleteWatchlistValidator,
};