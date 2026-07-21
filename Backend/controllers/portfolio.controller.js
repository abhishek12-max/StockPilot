const Holding = require("../models/holding.model");

const getPortfolio = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const holdings = await Holding.find({
      user: userId,
    }).populate("stock");

    let totalInvestment = 0;
    let totalCurrentValue = 0;
    let totalProfitLoss = 0;

    const portfolio = [];

    for (const holding of holdings) {
      const currentValue =
        holding.quantity * holding.stock.currentPrice;

      const investment =
        holding.quantity * holding.averagePrice;

      const profitLoss = currentValue - investment;

      totalInvestment += investment;
      totalCurrentValue += currentValue;
      totalProfitLoss += profitLoss;

      portfolio.push({
        stock: holding.stock.companyName,
        symbol: holding.stock.symbol,
        quantity: holding.quantity,
        averagePrice: holding.averagePrice,
        currentPrice: holding.stock.currentPrice,
        investment,
        currentValue,
        profitLoss,
      });
    }

    return res.status(200).json({
      success: true,
      portfolio,
      summary: {
        totalInvestment,
        totalCurrentValue,
        totalProfitLoss,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPortfolio,
};