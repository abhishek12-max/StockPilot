const express = require("express");
const authRoutes = require("./routes/auth.routes");
const employeeRoutes= require("./routes/employee.routes");
const watchlistRoutes=require("./routes/watchlist.routes");
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
app.use(errorMiddleware);
module.exports = app;


