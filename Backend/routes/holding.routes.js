const express= require("express")
const router= express.Router();
const authmiddleware= require("../middlewares/auth.middleware");
const holdingcontroller= require("../controllers/holding.controller");
router.get("/",authmiddleware,holdingcontroller.getHolding);


module.exports=router