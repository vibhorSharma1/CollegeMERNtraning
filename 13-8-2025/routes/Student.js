const express=require("express");
const Student=require("../models/Student");
const router=express.Router();

router.post("/student/add",async(req,res)=>{
    try{
        const studentData=req.body;
        console.log("Received student data:", studentData);
        const student=new Student(studentData);
        await student.save();
        res.status(201).json({message:"Student added successfully",student});
    }catch(err){
        console.error("Error adding student:", err);
        res.status(500).json({message:"Internal server error"});
    }
});

module.exports=router;