const express = require("express");
const { connection } = require("./config/db");
const { gstRoute } = require("./routes/gstFileRoute.route");
const { userRoute } = require("./routes/usersRoute.route");
const { adminRoute } = require("./routes/adminRoute.route");
const {auth} = require("./middlewares/authentication.middleware");
const  {authorised}  = require("./middlewares/authorised.middleware");
require("dotenv").config();
const app= express();
app.use(express.json());

app.use("/",gstRoute);
app.use("/users",userRoute);
app.use(auth)
app.use(authorised)
app.use("/admin",adminRoute)
app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("database connected with server");
    } catch (error) {
        console.log("error while connecting database to server");
    }
    console.log("server is running");
})