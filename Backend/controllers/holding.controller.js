const Holding= require("../models/holding.model");


const getHolding=async (req,res,next) => {
     try {
        const userId= req.user._id
        const holdings= await Holding.find({
            user:userId
        }).populate("stock");
        
        return res.status(200).json({
            "success":true,
            message:"holding fetch successfully",
            holdings
        })
     } catch (error) {
        next(error)
     }
}


module.exports={
    getHolding
}