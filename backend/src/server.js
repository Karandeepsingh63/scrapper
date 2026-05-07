const express=require('express');
const connectDB=require('./config/db');
const cors=require('cors');
require('dotenv').config();
const app=express();
const User = require("./models/User");
const Story = require("./models/Story");

// Connect to MongoDB
connectDB();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API is running...");
}   )

const PORT=process.env.PORT || 5000;                