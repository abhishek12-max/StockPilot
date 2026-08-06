const express = require("express");

const { chatWithAI } = require("../controllers/ai.controller");
const authmiddleware = require("../middlewares/auth.middleware");
const checkSubscription = require("../middlewares/checkSubscription.middleware");

const router = express.Router();

router.post(
  "/chat",
  authmiddleware,
 checkSubscription("PRO"),
  chatWithAI
);

module.exports = router;