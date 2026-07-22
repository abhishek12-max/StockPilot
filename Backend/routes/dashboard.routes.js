const express= require("express");
const router= express.Router();

const authmiddleware= require("../middlewares/auth.middleware");
const dashboardcontroller= require("../controllers/dashboard.controller");


router.get("/",authmiddleware,dashboardcontroller.getDashboard);

module.exports=router;



