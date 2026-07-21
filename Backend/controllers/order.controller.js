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
         if(side==="BUY"){
              const existingHolding= await Holding.findOne({
                user:userId,
                stock:stockId
              });
              if(!existingHolding){
                   const holding= await Holding.create({
                       user:userId,
                       stock:stockId,
                       quantity,
                       averagePrice:price
                   });
              }else{
                   const oldInvestment= existingHolding.quantity*existingHolding.averagePrice;
                   const newInvestment=  quantity*price
                 const  totalquantity= existingHolding.quantity+quantity;
                  const totalInvestment= oldInvestment+newInvestment;
                const newAveragePrice= totalInvestment/totalquantity;
                 existingHolding.quantity=  totalquantity;
                existingHolding.averagePrice= newAveragePrice
               await existingHolding.save();
              }
         }
          else if(side==="SELL"){
              const existingHolding= await Holding.findOne({
                user:userId,
                stock:stockId
              });

              if(!existingHolding){
                  return res.status(400).json({
                    "success":false,
                    message:"you don't own this stock"
                  })
              }


              if(existingHolding.quantity<quantity){
                   return res.status(400).json({
                    "success":false,
                    message:"unsuffient shares"
                  });
              }

              const newQuantity= existingHolding.quantity-quantity;
              if(newQuantity===0){
                  await existingHolding.deleteOne();
              }else{
                   existingHolding.quantity= newQuantity;
                 await existingHolding.save();
              }
         }
           
         const Order= await Order.create({
               user:userId,
               stock:stockId,
               quantity,
               price,
               side,
               orderType
         })   
         return res.status(201).json({
            "success":true,
            message:"order placed successfully",
            Order
         });
    } catch (error) {
        next(error)
    }
}

const recentOrder= async (req,res,next) => {
    try {
      const userId= req.user._id;
      const orders= await Order.find({
        user:userId
      }).populate("stock").sort({createdAt:-1}).limit(5)

      return res.status(200).json({
          "success":true,
          message:"order fetch successfully",
          orders
      })

    } catch (error) {
      next(error)
    }
}

module.exports={
  placeOrder,
  recentOrder
}