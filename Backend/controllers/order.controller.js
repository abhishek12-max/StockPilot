const Stock= require("../models/stock.model");
const Order= require("../models/order.model");

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
         return res.status(201).json({
            "success":true,
            message:"order placed successfully",
            data:{
                "order":order
            }
         })
    } catch (error) {
        next(error)
    }
}