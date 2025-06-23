// const express = require('express')

import express from "express";
import productRoutes from "./routes/products.routes.js";
import dotenv from 'dotenv'
import cors from 'cors'
import DbConfig from "./database/db.config.js";
dotenv.config()
const port = process.env.PORT
const app = express()
app.use(express.json())
app.use(cors({
    origin : "http://localhost:5173",
    methods:["GET","POST","PUT","DELETE"]
}))
app.get("",(req,res)=>{
    return res.json({
        data : "Welcome to home page"
    })
})
app.use("/task",productRoutes)
app.listen(port, ()=>{
    DbConfig()
    console.log("server connected successfully on port : "+port);
    
})