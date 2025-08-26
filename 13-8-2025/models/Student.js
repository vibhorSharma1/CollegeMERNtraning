const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamps");
const Schema = mongoose.Schema;
const studentSchema=new Schema({
    rollNo :{type:Number,required:true,unique:true},
    name:{type:String,required:true},
    adharCardNo:{type:String,required:true,unique:true},
    mobileNo:{type:String,required:false,unique:true},
    createdAt:Date,
    updatedAt:Date
});
studentSchema.plugin(timestamps,{index: true});

module.exports=mongoose.model("Student",studentSchema);