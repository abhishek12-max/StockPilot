const Holding= require("../models/holding.model");
const Watchlist= require("../models/watchlist.model");
const getDashboard= async (req,res,next) => {
     try {
         const userId= req.user._id;
         const holdings= await Holding.find({
            user: userId
         }).populate("stock");
         
       let totalInvestment = 0;
       let totalCurrentValue = 0;
      let totalProfitLoss = 0;

        for (const holding of holdings) {
      const currentValue =
        holding.quantity * holding.stock.currentPrice;

      const investment =
        holding.quantity * holding.averagePrice;

      const profitLoss = currentValue - investment;

         totalInvestment += investment;
        totalCurrentValue += currentValue;
        totalProfitLoss += profitLoss;

        }
       const  totalholdings = holdings.length;
         const watchlistcount= await Watchlist.countDocuments({
            user:userId
         });
         return res.status(200).json({
            "success":true,
            dashboard:{
                totalInvestment,
                totalProfitLoss,
                totalCurrentValue,
                totalholdings,
                watchlistcount
            }
         })
     } catch (error) {
        next(error)
     }
}