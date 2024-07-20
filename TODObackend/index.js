const express = require("express");
const cors=require("cors");
const { connect } = require("mongoose");
const user=require("./api/user")
const todo=require("./api/todo")
const PORT=3000;

const app=express();
app.use(cors())
app.use(express.json());

app.use("/user",user);
app.use("/todo",todo);

app.get("/",(req,res)=>{
    res.json({
        message:"hello"
    })
})

app.listen(PORT,()=>{console.log(`Connected to PORT:${PORT}`)})