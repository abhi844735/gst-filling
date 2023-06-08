const mongoose=require("mongoose");
const gstFileSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    totalMarks:{type:Number,required:true}
})
const Gstfilemodel=mongoose.model("files",gstFileSchema);
module.exports={Gstfilemodel}
