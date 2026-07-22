const express= require("express");
const router= express.Router();
const authmiddleware = require("../middlewares/auth.middleware");
const stockcontroller=require("../controllers/stock.controller");
const validationMiddleware= require("../middlewares/validation.middleware");
const { getStocksValidator } = require("../validators/stock.validator");


router.get("/",authmiddleware,getStocksValidator,validationMiddleware,stockcontroller.getStocks);

module.exports=router