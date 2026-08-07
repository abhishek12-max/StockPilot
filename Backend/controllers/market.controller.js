const Stock = require("../models/stock.model");

const getMarketStocks = async (req, res, next) => {
  try {

    const stocks = await Stock.find({
      isActive: true,
    });

    for (const stock of stocks) {

      const percentage =
        (Math.random() * 4 - 2) / 100;

      const newPrice =
        Number(
          (
            stock.currentPrice *
            (1 + percentage)
          ).toFixed(2)
        );

      stock.currentPrice = newPrice;

      await stock.save();

    }

    const updatedStocks = await Stock.find({
      isActive: true,
    }).sort({
      companyName: 1,
    });

    return res.status(200).json({

      success: true,

      message: "Market fetched successfully.",

      stocks: updatedStocks,

    });

  } catch (error) {

    next(error);

  }
};

module.exports = {
  getMarketStocks,
};