// const express = require('express')

import express from "express";
import productRoutes from "./routes/products.routes.js";

const app = express()
app.use(express.json())
app.get("",(req,res)=>{
    return res.json({
        data : "Welcome to home page"
    })
})
app.use("/products",productRoutes)
app.listen(3000, ()=>{
    console.log("server connected successfully on port :"+3000);
    
})