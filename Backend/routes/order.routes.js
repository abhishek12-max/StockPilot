const express= require("express");
const router= express.Router();

const authmiddleware = require("../middlewares/auth.middleware");
const { ordervalidation } = require("../validators/order.validator");
const validationMiddleware= require("../middlewares/validation.middleware");
const ordercontroller= require("../controllers/order.controller");
router.post("/",authmiddleware,ordervalidation,validationMiddleware,ordercontroller.placeOrder);
router.get("/recent",authmiddleware,ordercontroller.recentOrder);

module.exports=router;