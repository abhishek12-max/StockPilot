const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");

const {
  getHolding,
} = require("../controllers/holding.controller");

router.get(
  "/",
  authMiddleware,
  getHolding
);

module.exports = router;