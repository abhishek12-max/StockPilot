const Stock = require("../models/stock.model");

const getMarketStocks = async (req, res, next) => {
  try {
    const stocks = await Stock.find({
      isActive: true,
    });

    const updates = [];

    for (const stock of stocks) {
      // Random price change (-2% to +2%)
      const percentage = (Math.random() * 4 - 2) / 100;

      const newPrice = Number(
        (
          stock.currentPrice *
          (1 + percentage)
        ).toFixed(2)
      );

      updates.push({
        updateOne: {
          filter: {
            _id: stock._id,
          },
          update: {
            currentPrice: newPrice,
          },
        },
      });
    }

    if (updates.length > 0) {
      await Stock.bulkWrite(updates);
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