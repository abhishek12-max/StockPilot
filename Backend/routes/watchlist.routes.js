const express= require("express");
const router= express.Router();
const authmiddleware= require("../middlewares/auth.middleware");
const watchlistcontroller=require("../controllers/watchlist.controller");
const {watchlistValidation, deleteWatchlistValidation}= require("../validators/watchlist.validator");
const validationMiddleware = require("../middlewares/validation.middleware");

router.post("/",authmiddleware,watchlistValidation,validationMiddleware,watchlistcontroller.addToWatchlist);
router.get("/",authmiddleware,watchlistcontroller.getWatchlist);
router.delete("/:stockId",authmiddleware,deleteWatchlistValidation,validationMiddleware,watchlistcontroller.deleteWatchlist);

module.exports= router