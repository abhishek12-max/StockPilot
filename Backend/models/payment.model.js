const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    plan: {
  type: String,
  enum: ["PRO"],
  required: true,
},

    razorpayOrderId: {
      type: String,
      required: true,
    },

    razorpayPaymentId: {
      type: String,
      required: true,
    },

    razorpaySignature: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["SUCCESS", "FAILED"],
      default: "SUCCESS",
    },
    currency: {
  type: String,
  default: "INR",
},
paymentMethod: {
  type: String,
  default: "Razorpay",
},
   
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Payment", paymentSchema);