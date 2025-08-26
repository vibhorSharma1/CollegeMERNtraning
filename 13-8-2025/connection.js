const mongoose=require("mongoose");

async function connectDB(){
    try{
        await mongoose.connect("mongodb://localhost:27017/mernTraning2025");
        console.log("Database connected successfully");
    }catch(err){
        console.error("Database connection failed:", err);
    }
}

connectDB();