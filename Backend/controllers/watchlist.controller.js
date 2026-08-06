const Watchlist = require("../models/watchlist.model");
const Stock = require("../models/stock.model");

const addToWatchlist = async (req, res, next) => {
  try {

    const userId = req.user._id;

    const { stockId } = req.body;

    const stock = await Stock.findById(stockId);

    if (!stock) {
      return res.status(404).json({
        success: false,
        message: "Stock not found.",
      });
    }

    const existingWatchlist = await Watchlist.findOne({
      user: userId,
      stock: stockId,
    });

    if (existingWatchlist) {
      return res.status(409).json({
        success: false,
        message: "Stock already exists in watchlist.",
      });
    }

    const watchlist = await Watchlist.create({
      user: userId,
      stock: stockId,
    });

    return res.status(201).json({
      success: true,
      message: "Stock added successfully.",
      data: watchlist,
    });

  } catch (error) {
    next(error);
  }
};

const getWatchlist = async (req, res, next) => {
  try {

    const userId = req.user._id;

    const watchlist = await Watchlist.find({
      user: userId,
    })
      .populate(
        "stock",
        "symbol companyName exchange industry currentPrice"
      )
      .select("-user")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Watchlist fetched successfully.",
      data: watchlist,
    });

  } catch (error) {
    next(error);
  }
};

const deleteWatchlist = async (req, res, next) => {
  try {

    const userId = req.user._id;

    const { stockId } = req.params;

    const existingWatchlist = await Watchlist.findOneAndDelete({
      user: userId,
      stock: stockId,
    });

    if (!existingWatchlist) {
      return res.status(404).json({
        success: false,
        message: "Stock not found in watchlist.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Stock removed from watchlist successfully.",
    });

  } catch (error) {
    next(error);
  }
};

module.exports = {
  addToWatchlist,
  getWatchlist,
  deleteWatchlist,
};