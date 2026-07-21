const Stock = require("../models/stock.model");

const searchStock = async (req, res, next) => {
  try {
    const { keyword } = req.query;

    if (!keyword) {
      return res.status(400).json({
        success: false,
        message: "Keyword is required",
      });
    }

    const stocks = await Stock.find({
      $or: [
        {
          symbol: {
            $regex: keyword,
            $options: "i",
          },
        },
        {
          companyName: {
            $regex: keyword,
            $options: "i",
          },
        },
      ],
    });

    return res.status(200).json({
      success: true,
      message: "Stocks fetched successfully",
      stocks,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  searchStock,
};