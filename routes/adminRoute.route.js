const express=require("express");
const { Gstfilemodel } = require("../models/gstFile.model");
const app =express()
const adminRoute=express.Router();

adminRoute.get("/fileData",async(req,res)=>{
    try {
        const fileData=await Gstfilemodel.find();
        res.send({status:200,Data:fileData});
    } catch (error) {
        res.send({error})
    }
})
adminRoute.get('/avg',async(req,res)=>{
    try {
     let avgData= await  Gstfilemodel.aggregate([
            {
              $group: {
                _id: null,
                avgField: { $avg: "$totalMarks" }
              }
            }
          ])
        res.send({message:"Average marks in total students",avgMarks:avgData});
    } catch (error) {
        res.send({error})
    }
})
adminRoute.get("/sum",async(req,res)=>{
    try {
        let totalData= await  Gstfilemodel.aggregate([
            {
              $group: {
                _id: null,
                total: { $sum: "$totalMarks" }
              }
            }
          ])
           res.send({message:"total marks of all students",totalMarks:totalData});
       } catch (error) {
           res.send({error})
       }
})
adminRoute.post("/addData",async (req,res)=>{
        let {name,email,totalMarks}=req.body
    try {
        let addedData = new Gstfilemodel({name,email,totalMarks})
        await addedData.save()
        res.send({status:200,message:"data added successfully"})
    } catch (error) {
        res.send({error})
        
    }
})

adminRoute.delete("/delete/:id",async (req,res)=>{

    try {
        await Gstfilemodel.findByIdAndDelete({_id:req.params.id})
        res.send({status:200,message:"users data deleted successfully"})
    } catch (error) {
        res.send({error})
        
    }

})
adminRoute.patch("/update/:id",async (req,res)=>{
    try {
        await Blankmodel.findByIdAndUpdate({_id:req.params.id},req.body)
        res.send({status:200,message:"users data updated successfully"})
    } catch (error) {
        res.send({error})
    }
})
module.exports={adminRoute}
