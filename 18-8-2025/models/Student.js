const mongoose = require('mongoose');
const mongooseTimestamps = require('mongoose-timestamps');
const studentSchema = new mongoose.Schema({
    rollNo: { type: String, required: true },
    studentName: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    course: { type: String, required: true },
    branch: { type: String, required: true },
    yearOfAdmission: { type: String, required: true },
    studentImage: { type: String, required: true },
    createdAt:Date,
    updatedAt:Date
});

studentSchema.plugin(mongooseTimestamps,{index: true});
module.exports = mongoose.model('Student', studentSchema);