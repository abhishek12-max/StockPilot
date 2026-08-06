const express = require("express");
const router = express.Router();

const { createOrder,verifyPayment } = require("../controllers/payment.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/create-order", authMiddleware, createOrder);
router.post("/verify-payment", authMiddleware, verifyPayment);
module.exports = router;