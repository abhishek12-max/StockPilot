const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const validationMiddleware = require("../middlewares/validation.middleware");

const {
  placeOrder,
  recentOrder,
  getOrders,
} = require("../controllers/order.controller");

const {
  orderValidator,
} = require("../validators/order.validator");

// =========================
// Place Order
// =========================

router.post(
  "/",
  authMiddleware,
  orderValidator,
  validationMiddleware,
  placeOrder
);

// =========================
// Recent Orders
// =========================

router.get(
  "/recent",
  authMiddleware,
  recentOrder
);

// =========================
// All Orders
// =========================

router.get(
  "/",
  authMiddleware,
  getOrders
);

module.exports = router;