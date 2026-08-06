const Stock= require("../models/stock.model");
const Order= require("../models/order.model");
const  Holding= require("../models/holding.model");


const placeOrder = async (req, res, next) => {
  try {

    const userId = req.user._id;

    const {
      stockId,
      quantity,
      side,
      orderType,
    } = req.body;

    const stock = await Stock.findById(stockId);

    if (!stock) {
      return res.status(404).json({
        success: false,
        message: "Stock not found.",
      });
    }

    if (side === "BUY") {

      const existingHolding = await Holding.findOne({
        user: userId,
        stock: stock._id,
      });

      if (!existingHolding) {

        await Holding.create({
          user: userId,
          stock: stock._id,
          quantity,
          averagePrice: stock.currentPrice,
        });

      } else {

        const oldInvestment =
          existingHolding.quantity *
          existingHolding.averagePrice;

        const newInvestment =
          quantity * stock.currentPrice;

        const totalQuantity =
          existingHolding.quantity + quantity;

        const totalInvestment =
          oldInvestment + newInvestment;

        existingHolding.quantity =
          totalQuantity;

        existingHolding.averagePrice =
          totalInvestment / totalQuantity;

        await existingHolding.save();

      }

    } else if (side === "SELL") {

      const existingHolding = await Holding.findOne({
        user: userId,
        stock: stock._id,
      });

      if (!existingHolding) {
        return res.status(400).json({
          success: false,
          message: "You don't own this stock.",
        });
      }

      if (existingHolding.quantity < quantity) {
        return res.status(400).json({
          success: false,
          message: "Insufficient shares.",
        });
      }

      const remainingQuantity =
        existingHolding.quantity - quantity;

      if (remainingQuantity === 0) {

        await existingHolding.deleteOne();

      } else {

        existingHolding.quantity =
          remainingQuantity;

        await existingHolding.save();

      }

    }

    const order = await Order.create({

      user: userId,

      stock: stock._id,

      quantity,

      price: stock.currentPrice,

      side,

      orderType,

      status: "COMPLETED",

    });

    const message =
      side === "BUY"
        ? "Stock purchased successfully."
        : "Stock sold successfully.";

    return res.status(201).json({

      success: true,

      message,

      order,

    });

  } catch (error) {

    next(error);

  }
};

const recentOrder= async (req,res,next) => {
    try {
      const userId= req.user._id;
      const orders= await Order.find({
        user:userId
      }).populate("stock").sort({createdAt:-1}).limit(5)

      return res.status(200).json({
          "success":true,
          message:"order fetch successfully",
          orders
      })

    } catch (error) {
      next(error)
    }
}

const getOrders = async (req, res, next) => {
  try {

    const userId = req.user._id;

    const orders = await Order.find({
      user: userId,
    })
      .populate("stock", "symbol companyName")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Orders fetched successfully.",
      orders,
    });

  } catch (error) {
    next(error);
  }
};

module.exports={
  placeOrder,
  recentOrder,
  getOrders
}