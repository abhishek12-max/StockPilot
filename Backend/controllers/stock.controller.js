const Stock = require("../models/stock.model");

const getStocks = async (req, res, next) => {
  try {
    const {
      keyword = "",
      page = 1,
      limit = 10,
      sort = "companyName",
      order = "asc",
    } = req.query;

    const query = {
      isActive: true,
    };

    if (keyword.trim()) {
      query.$or = [
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
      ];
    }

    const skip = (Number(page) - 1) * Number(limit);

    const stocks = await Stock.find(query)
      .sort({
        [sort]: order === "asc" ? 1 : -1,
      })
      .skip(skip)
      .limit(Number(limit));

    const totalStocks = await Stock.countDocuments(query);

    res.status(200).json({
      success: true,
      stocks,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        totalStocks,
        totalPages: Math.ceil(totalStocks / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getStocks,
};