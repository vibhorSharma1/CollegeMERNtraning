const mongoose = require('mongoose');
const mongooseTimestamps = require('mongoose-timestamps');
const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    createdAt:Date,
    updatedAt:Date
});

userSchema.plugin(mongooseTimestamps,{index: true});
module.exports = mongoose.model('User', userSchema);