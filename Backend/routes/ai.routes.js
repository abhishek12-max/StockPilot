const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const checkSubscription = require("../middlewares/checkSubscription.middleware");

const { chatWithAI } = require("../controllers/ai.controller");

router.post(
  "/chat",
  authMiddleware,
  checkSubscription("PRO"),
  chatWithAI
);

module.exports = router;