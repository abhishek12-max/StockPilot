const User = require("../models/user.model");
const Holding = require("../models/holding.model");
const Watchlist = require("../models/watchlist.model");
const Stock = require("../models/stock.model");

const { buildPrompt } = require("../utils/promptBuilder");
const { generateAIResponse } = require("../services/ai.service");

const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const user = await User.findById(req.user._id).select(
      "fullname email"
    );

    const holdings = await Holding.find({
      user: req.user._id,
    }).populate("stock");

    const watchlist = await Watchlist.find({
      user: req.user._id,
    }).populate("stock");

    // Portfolio data manually create
    const portfolio = holdings.map((holding) => {
      const currentPrice = holding.stock?.currentPrice || 0;

      const totalInvestment =
        holding.averagePrice * holding.quantity;

      const currentValue =
        currentPrice * holding.quantity;

      const profitLoss =
        currentValue - totalInvestment;

      return {
        symbol: holding.stock?.symbol,
        quantity: holding.quantity,
        averagePrice: holding.averagePrice,
        currentPrice,
        totalInvestment,
        currentValue,
        profitLoss,
      };
    });

    const prompt = buildPrompt({
      user,
      portfolio,
      holdings,
      watchlist,
      message,
    });

    const response = await generateAIResponse(prompt);

    return res.status(200).json({
      success: true,
      response,
    });
  } catch (error) {
    console.error("AI Controller Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate AI response",
    });
  }
};

module.exports = {
  chatWithAI,
};