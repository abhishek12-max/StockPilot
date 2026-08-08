const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = require("../config/db");
const Stock = require("../models/stock.model");
const stocks = require("./stocks");

dotenv.config();

const seedDatabase = async () => {
  try {
    await connectDB();

    console.log("🌱 Seeding Stocks...");

    // Purane stocks delete
    await Stock.deleteMany();

    // Naye stocks insert
    await Stock.insertMany(stocks);

    console.log("✅ Stocks Seeded Successfully");

    await mongoose.connection.close();

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding Failed:", error.message);

    process.exit(1);
  }
};

seedDatabase();