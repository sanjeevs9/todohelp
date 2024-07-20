const mongoose = require("mongoose");
const { Schema } = mongoose;
const dotenv = require("dotenv");

dotenv.config()

mongoose.connect(`${process.env.DATABASE}`)


const userSchema=new Schema({
    email:{
        type:String,
        requried:true,
        unique:true,
        lowercase:true,
        minlength:1
    },
    password:{
        type:String,
        required:true,
        minlength:5
    },
    todos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"todo"
    }]
    
})

const todoSchema =new Schema({
    title:{
        type:String,
        minlength:1,
        requried:true
    },
    description:{
        type:String,
        requried:true,
        minlength:1
    },
    tag:{
        type:String,
        required:true
    },
})

const User=mongoose.model("user",userSchema)
const Todo=mongoose.model("todo",todoSchema)


module.exports={User,Todo}