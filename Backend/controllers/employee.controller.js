const userModel = require("../models/user.model");
const {validationResult}= require("express-validator");

const FindemployeeById= async (req,res,next) => {
      try {
        const {id}= req.params
        const employee= await userModel.findById(id).select("-password -refeshToken")
        if(!employee){
            return res.status(404).json({
                "success":false,
                message:"Employee not found"
            })
        }
        res.status(200).json({
            "success":true,
            message:"fetch employee by Id successfull",
            employee
        })
      } catch (error) {
        next(error)
      }
}

const updateEmployeeById= async (req,res,next) => {
    try {
        
         const{id}=req.params
        const{fullname ,email,role}=req.body
        const employee= await userModel.findById(id);
        if(!employee){
            return res.status(404).json({
                "success":false,
                message:"Employee not found"
            })
        }
              if (email) {
            const existingUser = await userModel.findOne({
                email:email.toLowerCase(),
                _id: { $ne: id }
            });

            if (existingUser) {
                return res.status(400).json({
                    success: false,
                    message: "Email already exists"
                });
            }
        }

        if(fullname) employee.fullname= fullname;
        if(email) employee.email= email;
        if(role) employee.role= role

        await employee.save();
      res.status(200).json({
         "success":true,
         message:" Employee updated successfully",
         employee
      })
    } catch (error) {
        next(error)
    }
}

const deleteemployee= async (req,res,next) => {
     try {
         const {id}= req.params;
         const employee= await userModel.findById(id);
         if(!employee){
            return res.status(404).json({
                "sucsess":false,
                message:"employee not found"
            })
         }
         if(req.user._id.toString()===id){
            return res.status(400).json({
                "success":false,
                message:"you cannot delete your own account"
            })
         }
         await userModel.findByIdAndDelete(id);
         res.status(200).json({
            "success":true,
            message:"Employee deleted successfully"
         })
     } catch (error) {
        next(error)
     }
}



const getAllEmployees= async (req,res,next) => {
     try {
         const{search ,role, sort="createdAt",order="desc",limit=10,page=1}= req.query;

          const allowedRoles = ["admin", "user"];
          if (role) {
          if (!allowedRoles.includes(role)) {              
               return res.status(400).json({
                   success: false,
                   message: "Invalid role"
                });
                  }
          }
          const allowedSortFields = [
                  "fullname",
                  "email",
                  "role",
                  "createdAt"
                 ];
         if (!allowedSortFields.includes(sort)) {
              return res.status(400).json({
                  success: false,
                  message: "Invalid sort field"
              });
           }
         const query={};
         if(search){
            query.$or=[
                {fullname:{
                    $regex:search.trim(),
                    $options:"i"
                }},
                {email:{
                    $regex:search.trim(),
                    $options:"i"
                }}
            ]
         }
         if(role){
             query.role=role
         }
         
         let sortOrder= -1;
         if(order==="asc"){
              sortOrder=1
         }
         const pageNumber = Number(page);
        const limitNumber = Number(limit);
       if (pageNumber < 1 || limitNumber < 1) {
            return res.status(400).json({
                "success":false,
                message: "Page and limit must be greater than 0"
            });
        }
         const skip = (pageNumber - 1) * limitNumber;

        const totalEmployees = await userModel.countDocuments(query);
        const employees = await userModel.find(query)
            .select("-password -refreshToken")
            .sort({
                [sort]: sortOrder
            })
            .skip(skip)
            .limit(limitNumber);

        if (employees.length === 0) {
            return res.status(404).json({
                "success":false,
                message: "Employees not found"
            });
        }
        res.status(200).json({
            "success":true,
            message: "Employees fetched successfully",
            currentPage: pageNumber,
            totalEmployees,
            totalPages: Math.ceil(totalEmployees / limitNumber),
            employees
        });
     } catch (error) {
        next(error);
     }
}
module.exports={
    
    getAllEmployees,
    FindemployeeById,
    updateEmployeeById,
    deleteemployee,
   
}