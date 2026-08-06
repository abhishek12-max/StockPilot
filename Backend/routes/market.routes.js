const Stock = require("../models/stock.model");

router.get("/seed", async (req, res) => {
  await Stock.deleteMany();

  await Stock.insertMany([
    // <-- yahin apna wahi 10 stocks ka array paste kar
  ]);

  const count = await Stock.countDocuments();

  res.json({
    success: true,
    count,
  });
});