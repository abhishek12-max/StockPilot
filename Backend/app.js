const express = require("express");
const authRoutes = require("./routes/auth.routes");
const employeeRoutes= require("./routes/employee.routes");
const watchlistRoutes=require("./routes/watchlist.routes");
const orderRoutes= require("./routes/order.routes");
const holdingRoutes=require("./routes/holding.routes");
const portfolioRoutes= require("./routes/portfolio.routes");
const stockRoutes= require("./routes/stock.routes");
const dashboardRoutes= require("./routes/dashboard.routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/error.middleware");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);
app.use("/api/auth", authRoutes);
app.use("/api/employee",employeeRoutes);
app.use("/api/wishlist",watchlistRoutes);
app.use("/api/order",orderRoutes);
app.use("/api/holding",holdingRoutes);
app.use("/api/portfolio",portfolioRoutes);
app.use("/api/stocks",stockRoutes);
app.use("/api/dashboard",dashboardRoutes);
app.use(errorMiddleware);
module.exports = app;


