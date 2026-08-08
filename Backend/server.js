const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

process.on("uncaughtException", (error) => {
  console.error("❌ Uncaught Exception:", error);
  process.exit(1);
});

process.on("unhandledRejection", (error) => {
  console.error("❌ Unhandled Rejection:", error);
  process.exit(1);
});

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server Running On Port ${PORT}`);
    });

  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();