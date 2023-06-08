const express = require("express");
const { connection } = require("./config/db");
const { gstRoute } = require("./routes/gstFileRoute.route");
require("dotenv").config();
const app= express();
app.use(express.json());
app.use("/",gstRoute);
app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("database connected with server");
    } catch (error) {
        console.log("error while connecting database to server");
    }
    console.log("server is running");
})