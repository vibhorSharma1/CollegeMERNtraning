const express=require("express");
const User=require("../models/User");
const router=express.Router();

router.post("/user/add",async(req,res)=>{
    try{
        const userData=req.body;
        console.log("Received student data:", userData);
        const user=new User(userData);
        await user.save();
        res.status(201).json({message:"Student added successfully",user});
    }catch(err){
        console.error("Error adding student:", err);
        res.status(500).json({message:"Internal server error"});
    }
});

module.exports=router;