require("dotenv").config();
const jwt=require("jsonwebtoken");
const auth=(req,res,next)=>{
    try {
        let token = req.headers.authorization;
        if(token){
            jwt.verify(token,process.env.privateKey,(err,decoded)=>{
                if(err){
                    res.send({err})
                }
                if(decoded){
                    // console.log(decoded)
                    req.body.userId=decoded.userId;
                    req.body.role=decoded.role;
                    next();
                }
            })
        }else{
            res.send({status:404,message:"Please log in again"})
        }
    } catch (error) {
        res.send({status:500,error:error})
    }
}
module.exports={auth}