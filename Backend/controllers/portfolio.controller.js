const Holding = require("../models/holding.model");

const getPortfolio = async (req, res, next) => {
  try {

    const userId = req.user._id;

    const holdings = await Holding.find({
      user: userId,
    }).populate(
      "stock",
      "companyName symbol currentPrice"
    );

    let totalInvestment = 0;
    let totalCurrentValue = 0;
    let totalProfitLoss = 0;

    const portfolio = [];

    for (const holding of holdings) {

      const investment =
        holding.quantity * holding.averagePrice;

      const currentValue =
        holding.quantity * holding.stock.currentPrice;

      const profitLoss =
        currentValue - investment;

      totalInvestment += investment;
      totalCurrentValue += currentValue;
      totalProfitLoss += profitLoss;

      portfolio.push({

        stock: {
             _id: holding.stock._id,
          companyName: holding.stock.companyName,

          symbol: holding.stock.symbol,

          currentPrice: holding.stock.currentPrice,

        },

        quantity: holding.quantity,

        averagePrice: holding.averagePrice,

        investment,

        currentValue,

        profitLoss,

      });

    }

    return res.status(200).json({

      success: true,

      message: "Portfolio fetched successfully.",

      summary: {

        totalInvestment,

        totalCurrentValue,

        totalProfitLoss,

        totalHoldings: holdings.length,

      },

      portfolio,

    });

  } catch (error) {

    next(error);

  }
};

module.exports = {
  getPortfolio,
};