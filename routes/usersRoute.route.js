const express=require("express");
const { Usermodel } = require("../models/users.model");
const userRoute = express.Router();
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

userRoute.post("/register",async(req,res)=>{
    try {
        let {name,email,role,password}=req.body;
        const emailCheck=await Usermodel.find({email});
        if(emailCheck.length!=0){
            return res.send({status:400,message:"already registered with this"})
        }
        if(password.length<10){
            return res.send({status:400,message:"weak password"})
        }
        bcrypt.hash(password,3,async(err,secure_password)=>{
            if(err){
                return res.send({error:err.message})
            }
            else{
                let userData= await new Usermodel({name,email,password:secure_password,role});
                await userData.save();
                res.send({status:201,message:`${name} has registered successfully`});
            }
        })


        
    } catch (error) {
        res.send({status:500,message:error.message})
    }
})
module.exports={userRoute}
