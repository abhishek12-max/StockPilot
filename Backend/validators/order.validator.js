const {body}= require("express-validator");


const ordervalidation=[
     body("stockId")
     .notEmpty()
     .withMessage("stock is required")
     .bail()
     .isMongoId()
     .withMessage("invalid stock ID"),

     body("quantity")
     .notEmpty()
     .withMessage("quantity is required")
     .bail()
     .isInt({min:1})
     .withMessage("value should be interger and minimum 1 "),
 
     body("price")
     .notEmpty()
     .withMessage("price is required")
     .bail()
     .isNumeric()
     .withMessage("must be numeric")
     .isFloat({gt:0})
     .withMessage("length is greater than zero"),
   
     body("side")
     .notEmpty()
     .withMessage("side is required")
     .bail()
  .isIn(["BUY", "SELL"])
  .withMessage("Side must be BUY or SELL."),

  body("orderType")
   .notEmpty()
   .withMessage("ordertype is required")
   .bail()
  .isIn(["MARKET", "LIMIT"])
  .withMessage("Order type must be MARKET or LIMIT.")
     

]

module.exports={
    ordervalidation
}