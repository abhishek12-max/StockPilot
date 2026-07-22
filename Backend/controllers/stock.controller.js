const Stock = require("../models/stock.model");

const getStocks = async (req, res, next) => {
  try {
    const {
      keyword,
      sort = "createdAt",
      order = "desc",
      page = 1,
      limit = 10,
    } = req.query;

    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    const query = {};

    if (keyword) {
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

    let sortOrder = -1;

   if (order === "asc") {
    sortOrder = 1;
     }

    const skip = (pageNumber - 1) * limitNumber;

    const [totalStocks, stocks] = await Promise.all([
      Stock.countDocuments(query),

      Stock.find(query)
        .sort({ [sort]: sortOrder })
        .skip(skip)
        .limit(limitNumber),
    ]);

    return res.status(200).json({
      success: true,
      message: "Stocks fetched successfully",
      stocks,
      pagination: {
        page: pageNumber,
        limit: limitNumber,
        totalStocks,
        totalPages: Math.ceil(totalStocks / limitNumber),
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getStocks,
};