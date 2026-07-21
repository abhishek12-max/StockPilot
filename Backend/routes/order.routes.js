const express= require("express");
const router= express.Router();

const authmiddleware = require("../middlewares/auth.middleware");
const { ordervalidation } = require("../validators/order.validator");
const validationMiddleware= require("../middlewares/validation.middleware");

router.post("/",authmiddleware,ordervalidation,validationMiddleware)


module.exports=router;