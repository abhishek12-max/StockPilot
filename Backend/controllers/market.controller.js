const Stock = require("../models/stock.model");
const mongoose = require("mongoose");

const getMarketStocks = async (req, res, next) => {
  try {
    console.log("DB Name:", mongoose.connection.name);
    console.log("Host:", mongoose.connection.host);

    
      const count = await Stock.countDocuments();
console.log("STOCK COUNT:", count);
    const stocks = await Stock.find({});
    console.log("Stocks Found:", stocks.length);

    return res.status(200).json({
      success: true,
      db: mongoose.connection.name,
      count,
      stocks,
    });

  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  getMarketStocks,
};