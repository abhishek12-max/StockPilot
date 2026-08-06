const crypto = require("crypto");
const Payment = require("../models/payment.model");
const razorpay = require("../config/razorpay");

const createOrder = async (req, res, next) => {
  try {
        console.log("CREATE ORDER CALLED");
    console.log(req.body);
    const { plan } = req.body;
    
    if (plan !== "PRO") {
  return res.status(400).json({
    success: false,
    message: "Invalid Plan",
  });
}

const amount = 299;

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    console.log("Order Created:", order.id);

    return res.status(200).json({
      success: true,
      order,
      key: process.env.RAZORPAY_KEY_ID,
    });

  } catch (error) {

    console.log("Create Order Error:", error);

    next(error);

  }
};

const verifyPayment = async (req, res, next) => {

  try {

    console.log("========== VERIFY PAYMENT ==========");
    console.log(req.body);

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      plan,
    } = req.body;

    const generatedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET
      )
      .update(
        razorpay_order_id + "|" + razorpay_payment_id
      )
      .digest("hex");

    console.log("Generated Signature:");
    console.log(generatedSignature);

    console.log("Razorpay Signature:");
    console.log(razorpay_signature);

    if (generatedSignature !== razorpay_signature) {

      console.log("Signature Mismatch");

      return res.status(400).json({
        success: false,
        message: "Invalid Payment Signature",
      });

    }

    console.log("Signature Verified");

    const payment = await Payment.create({

      user: req.user._id,

      plan,

      razorpayOrderId: razorpay_order_id,

      razorpayPaymentId: razorpay_payment_id,

      razorpaySignature: razorpay_signature,

      amount: 299,

      status: "SUCCESS",

    });

    console.log("Payment Saved");
    console.log(payment);

    req.user.plan = plan;

    await req.user.save();

    console.log("User Plan Updated:", req.user.plan);

    return res.status(200).json({

      success: true,

      message: `${plan} activated successfully.`,

    });

  } catch (error) {

    console.log("Verify Payment Error");
    console.log(error);

    next(error);

  }

};

module.exports = {
  createOrder,
  verifyPayment,
};