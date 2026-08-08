const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    exchange: {
      type: String,
      enum: ["NASDAQ", "NYSE", "NSE", "BSE"],
      required: true,
    },

    industry: {
      type: String,
      default: "Unknown",
      trim: true,
    },

    currentPrice: {
      type: Number,
      required: true,
      min: 0,
    },

    previousClose: {
      type: Number,
      required: true,
      min: 0,
    },

    logo: {
      type: String,
      default: "",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Stock", stockSchema);