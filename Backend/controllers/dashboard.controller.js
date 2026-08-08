const Holding = require("../models/holding.model");
const Watchlist = require("../models/watchlist.model");

const getDashboard = async (req, res, next) => {
  try {

    const userId = req.user._id;

    const holdings = await Holding.find({
      user: userId,
    }).populate(
      "stock",
      " symbol currentPrice"
    );

    let totalInvestment = 0;
    let totalCurrentValue = 0;
    let totalProfitLoss = 0;

    for (const holding of holdings) {

      const investment =
        holding.quantity *
        holding.averagePrice;

      const currentValue =
        holding.quantity *
        holding.stock.currentPrice;

      const profitLoss =
        currentValue - investment;

      totalInvestment += investment;
      totalCurrentValue += currentValue;
      totalProfitLoss += profitLoss;

    }
    const portfolioData = holdings.map((holding) => ({

  name: holding.stock.symbol,

  value:
    holding.quantity *
    holding.stock.currentPrice,

}));

    const totalholdings = holdings.length;

    const watchlistcount =
      await Watchlist.countDocuments({
        user: userId,
      });

   return res.status(200).json({

  success: true,

  data: {

    totalInvestment,

    totalCurrentValue,

    totalProfitLoss,

    totalholdings,

    watchlistcount,

    portfolioData,

  },

});

  } catch (error) {

    next(error);

  }
};

module.exports = {
  getDashboard,
};