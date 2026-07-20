const mongoose= require("mongoose");

const holdingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    stock: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Stock",
      required: true,
      index: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 0,
    },

    averagePrice: {
      type: Number,
      required: true,
      min: 0.01,
    },
  },
  {
    timestamps: true,
  }
);

// One holding per user per stock
holdingSchema.index(
  { user: 1, stock: 1 },
  { unique: true }
);

const Holding = mongoose.model("Holding", holdingSchema);

module.exports= Holding;