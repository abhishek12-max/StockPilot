const express = require("express");

const router = express.Router();

const authmiddleware = require("../middlewares/auth.middleware");
const validationMiddleware = require("../middlewares/validation.middleware");

const { getStocks } = require("../controllers/stock.controller");
const { getStocksValidator } = require("../validators/stock.validator");

router.get(
  "/",
  authmiddleware,
  getStocksValidator,
  validationMiddleware,
  getStocks
);

module.exports = router;