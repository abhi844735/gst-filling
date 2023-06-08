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

userRoute.post("/login",async(req,res)=>{
    try {
        let {email,password}=req.body;
        const user=await Usermodel.find({email});
        const secure_password=user[0].password
        if(user.length>0){
            bcrypt.compare(password,secure_password,(err,result)=>{
                if(err){
                    res.send({err})
                }
                if(result){
                    let token=jwt.sign({userId:user[0]._id,role:user[0].role},process.env.privateKey)
                    res.send({message:"user logged in",token});
                }else{
                    res.send({message:"wrong password"})
                }
            })
        }else{
            res.send({status:404,message:"Email not Found"})
        }
    } catch (error) {
        res.send({status:500,error:error})
    }
})
module.exports={userRoute}
