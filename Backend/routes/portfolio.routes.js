const express= require("express");
const authmiddleware= require("../middlewares/auth.middleware");
const portfoliocontroller= require("../controllers/portfolio.controller");
const router= express.Router();

router.get("/",authmiddleware,portfoliocontroller.getPortfolio);

module.exports=router;