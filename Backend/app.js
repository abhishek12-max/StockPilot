const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");
const stockRoutes = require("./routes/stock.routes");
const watchlistRoutes = require("./routes/watchlist.routes");
const orderRoutes = require("./routes/order.routes");
const holdingRoutes = require("./routes/holding.routes");
const portfolioRoutes = require("./routes/portfolio.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const marketRoutes = require("./routes/market.routes");
const paymentRoutes = require("./routes/payment.routes");
const aiRoutes = require("./routes/ai.routes");

const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

/* ===========================
   Middlewares
=========================== */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://stock-pilot-silk.vercel.app",
      "https://stockpilot.codeabhi.in",
    ],
    credentials: true,
  })
);

/* ===========================
   Health Check
=========================== */

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "StockPilot Backend Running 🚀",
  });
});

/* ===========================
   Routes
=========================== */

app.use("/api/auth", authRoutes);
app.use("/api/stocks", stockRoutes);
app.use("/api/watchlist", watchlistRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/holding", holdingRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/market", marketRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/ai", aiRoutes);

/* ===========================
   Error Middleware
=========================== */

app.use(errorMiddleware);

module.exports = app;