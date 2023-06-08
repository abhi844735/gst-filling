const express=require("express");
const app=express();
const gstRoute = express.Router();
const multer=require("multer");
const path = require("path");
const bodyParser=require("body-parser");
const { Gstfilemodel } = require("../models/gstFile.model");
const csv=require("csvtojson");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.resolve(__dirname,"public")));
var storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/uploads');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});
var upload=multer({storage:storage});
gstRoute.post("/importFile",upload.single("file"),async(req,res)=>{
    try {
       let gstFileData=[];
     csv()
     . fromFile(req.file.path)
     .then(async(response)=>{
        for(let i=0;i<response.length;i++){
            gstFileData.push({
                name:response[i].name,
                email:response[i].email,
                totalMarks:response[i].totalMarks
            })
        }
        await Gstfilemodel.insertMany(gstFileData);
     })
        res.send({status:200,success:true,msg:"csv imported"})
        
    } catch (error) {
        res.send({status:400,success:false,msg:error.message})
    }
})
module.exports={gstRoute}