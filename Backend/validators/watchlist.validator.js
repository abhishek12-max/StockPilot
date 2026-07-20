const {body, param}= require("express-validator");


const watchlistValidation=[
      
      body("stockId")
        .trim()
      .notEmpty()
      .withMessage("Stock id is required.")
      .bail()
      .isMongoId()
      .withMessage("Invalid stock id."),

];

const deleteWatchlistValidation=[
      param("stockId")
      .notEmpty()
        .bail()
      .withMessage("stock is required")
      .isMongoId()
      .withMessage("Invalid stock id")
]

module.exports={
    watchlistValidation,
    deleteWatchlistValidation
}