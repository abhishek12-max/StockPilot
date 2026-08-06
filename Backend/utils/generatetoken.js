const jwt= require("jsonwebtoken");

const generateAccessToken= (User)=>{
      const token= jwt.sign({id:User._id,role:User.role},process.env.ACCESS_TOKEN_SECRET,
              {
            expiresIn:"10m"
            }
           )
           return token
        

   }

   const generateRefreshToken=(User)=>{
       const token=jwt.sign({id:User._id,role:User.role},process.env.REFRESH_TOKEN_SECRET,{
          expiresIn:"30d"
       });
        return token
   }

module.exports={
    generateAccessToken,
    generateRefreshToken
}