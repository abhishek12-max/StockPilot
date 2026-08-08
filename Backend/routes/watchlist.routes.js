const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const validationMiddleware = require("../middlewares/validation.middleware");

const {
  addToWatchlist,
  getWatchlist,
  deleteWatchlist,
} = require("../controllers/watchlist.controller");

const {
  addToWatchlistValidator,
  deleteWatchlistValidator,
} = require("../validators/watchlist.validator");

// =========================
// Add to Watchlist
// =========================

router.post(
  "/",
  authMiddleware,
  addToWatchlistValidator,
  validationMiddleware,
  addToWatchlist
);

// =========================
// Get Watchlist
// =========================

router.get(
  "/",
  authMiddleware,
  getWatchlist
);

// =========================
// Remove from Watchlist
// =========================

router.delete(
  "/:stockId",
  authMiddleware,
  deleteWatchlistValidator,
  validationMiddleware,
  deleteWatchlist
);

module.exports = router;