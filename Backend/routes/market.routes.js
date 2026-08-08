const express = require("express");

const router = express.Router();

const {
  getMarketStocks,
} = require("../controllers/market.controller");

router.get("/", getMarketStocks);

module.exports = router;