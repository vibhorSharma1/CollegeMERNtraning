const express=require("express");
const app=express();



const student=require("./routes/Student")

app.use(express.json());
app.use(student)

app.post("/add/user",async(req,res)=>{
    try{
        const userData=req.body;
        console.log("Received user data:", userData);
        const user=new User(userData);
        await user.save();
        res.status(201).json({message:"User added successfully",user});
    }catch(err){
        console.error("Error adding user:", err);
        res.status(500).json({message:"Internal server error"});
    }
});
app.get("/",(req,res)=>{
    res.send("Welcome to the Student Management System");
})

app.listen(3000,()=>{
    console.log("Server is running at http://localhost:300");
})