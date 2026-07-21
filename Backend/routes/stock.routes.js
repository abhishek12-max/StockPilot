const express= require("express");
const authmiddleware = require("../middlewares/auth.middleware");
const stockcontroller=require("../controllers/stock.controller");
const router= express.Router();

router.get("/search",authmiddleware,stockcontroller.searchStock);

module.exports=router