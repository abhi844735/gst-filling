const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    role:{type:String,required:true,enum:["user","admin"],default:"user"},
    password:{type:String,required:true}
})
const Usermodel=mongoose.model("users",userSchema);
module.exports={Usermodel}
