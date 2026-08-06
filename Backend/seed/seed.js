const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Stock = require("../models/stock.model");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {

    console.log("MongoDB Connected");

    await Stock.deleteMany();

    await Stock.insertMany([
      {
        symbol: "AAPL",
        companyName: "Apple Inc.",
        exchange: "NASDAQ",
        industry: "Technology",
        currentPrice: 308.91,
        isActive: true,
      },
      {
        symbol: "MSFT",
        companyName: "Microsoft",
        exchange: "NASDAQ",
        industry: "Technology",
        currentPrice: 464.72,
        isActive: true,
      },
      {
        symbol: "TSLA",
        companyName: "Tesla",
        exchange: "NASDAQ",
        industry: "Automobile",
        currentPrice: 311.21,
        isActive: true,
      },
      {
        symbol: "NVDA",
        companyName: "NVIDIA",
        exchange: "NASDAQ",
        industry: "Semiconductor",
        currentPrice: 200.75,
        isActive: true,
      },
      {
        symbol: "AMZN",
        companyName: "Amazon",
        exchange: "NASDAQ",
        industry: "E-Commerce",
        currentPrice: 271.58,
        isActive: true,
      },
      {
        symbol: "GOOGL",
        companyName: "Alphabet Inc.",
        exchange: "NASDAQ",
        industry: "Technology",
        currentPrice: 356.13,
        isActive: true,
      },
      {
        symbol: "META",
        companyName: "Meta",
        exchange: "NASDAQ",
        industry: "Technology",
        currentPrice: 712.25,
        isActive: true,
      },
      {
        symbol: "NFLX",
        companyName: "Netflix",
        exchange: "NASDAQ",
        industry: "Entertainment",
        currentPrice: 1245.45,
        isActive: true,
      },
      {
        symbol: "TCS",
        companyName: "Tata Consultancy Services",
        exchange: "NSE",
        industry: "IT Services",
        currentPrice: 3520.75,
        isActive: true,
      },
      {
        symbol: "INFY",
        companyName: "Infosys",
        exchange: "NSE",
        industry: "IT Services",
        currentPrice: 1625.30,
        isActive: true,
      },
    ]);

    console.log("Stocks Seeded Successfully");

    process.exit();

  })
  .catch((err) => {

    console.log(err);

    process.exit(1);

  });