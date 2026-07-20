const express= require("express");
const authmiddleware= require("../middlewares/auth.middleware");
const authorizedRoles = require("../middlewares/authorized.middleware");
const employeecontroller= require("../controllers/employee.controller");
const router= express.Router();
const{updateemployeeValidator}= require("../validators/auth.validator");
const validationMiddleware = require("../middlewares/validation.middleware");

router.get("/search",authmiddleware,authorizedRoles("admin"),employeecontroller.getAllEmployees);
router.get("/:id",authmiddleware,authorizedRoles("admin"),employeecontroller.FindemployeeById);
router.patch("/:id",authmiddleware,authorizedRoles("admin"),updateemployeeValidator,validationMiddleware,employeecontroller.updateEmployeeById)
router.delete("/:id",authmiddleware,authorizedRoles("admin"),employeecontroller.deleteemployee);
module.exports= router;