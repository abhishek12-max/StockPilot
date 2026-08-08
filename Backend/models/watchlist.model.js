const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    stock: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Stock",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Ek user ek hi stock ko sirf ek baar watchlist me add kar sakta hai
watchlistSchema.index(
  {
    user: 1,
    stock: 1,
  },
  {
    unique: true,
  }
);

module.exports = mongoose.model("Watchlist", watchlistSchema);