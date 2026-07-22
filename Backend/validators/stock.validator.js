const { query } = require("express-validator");

const ALLOWED_SORT_FIELDS = [
  "companyName",
  "symbol",
  "price",
  "createdAt",
];

const ALLOWED_ORDER = ["asc", "desc"];

const getStocksValidator = [
  query("page")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Page must be greater than 0"),

  query("limit")
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage("Limit must be between 1 and 100"),

  query("sort")
    .optional()
    .isIn(ALLOWED_SORT_FIELDS)
    .withMessage("Invalid sort field"),

  query("order")
    .optional()
    .isIn(ALLOWED_ORDER)
    .withMessage("Invalid order value"),
];

module.exports = {
  getStocksValidator,
};