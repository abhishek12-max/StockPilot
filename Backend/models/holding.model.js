const mongoose= require("mongoose");

const holdingSchema = new mongoose.Schema(
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

    quantity: {
      type: Number,
      required: true,
      min: 1,
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

holdingSchema.index(
  { user: 1, stock: 1 },
  { unique: true }
);

const Holding = mongoose.model("Holding", holdingSchema);

module.exports= Holding;