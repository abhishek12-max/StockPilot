const Stock= require("../models/stock.model");
const Order= require("../models/order.model");
const  Holding= require("../models/holding.model");
const placeOrder= async (req,res,next) => {
    try {
        const userId= req.user._id;
        const{stockId,quantity,price,side,orderType}= req.body
        const existingstock= await Stock.findById(stockId);
         if(!existingstock){
            return res.status(404).json({
                "success":false,
                message:"stock not found"
            })
         }
         const order= await Order.create({
              user:userId,
              stock: stockId,
               quantity,
               price,
               side,
               orderType
         });
         const existingHolding = await Holding.findOne({
             user:userId,
             stock:stockId
         });
         if(!existingHolding){
            const holding= await Holding.create({
                 user:userId,
                 stock:stockId,
                 quantity,
                 averagePrice:price
            })
            return res.status(201).json({
                 "success":true,
                 message:"holding create",
                 order,
                 holding
            });
         }
         const oldInvestment= existingHolding.quantity*existingHolding.averagePrice;
         const newInvestment= quantity*price
         const totalnvestment= oldinvestment+newinvestment;
         const totalQuantity= existingHolding.quantity+quantity;
         const newAverageprice=totalinvestment/totalquantity
         existingHolding.quantity= totalquantity;
         existingHolding.averagePrice= newaverageprice;
         await existingHolding.save();
         return res.status(200).json({
            "success":true,
            message:"order placed  successfully",
             order,
            existingHolding
         })
    } catch (error) {
        next(error)
    }
}