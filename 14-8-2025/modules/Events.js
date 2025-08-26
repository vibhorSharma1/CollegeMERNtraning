const mongoose = require('mongoose');
const mongooseTimestamps = require('mongoose-timestamps');
const eventsSchema = new mongoose.Schema({
   eventId:{type:Number, required:true, unique:true},
    eventName:{type:String, required:true},
    eventType:{type:String, required:true},
    place:{type:String, required:true},
    dateOfEvent:{type:Date, required:true},
    organisedBy:{type:String, required:true},
    createdAt:Date,
    updatedAt:Date
});

eventsSchema.plugin(mongooseTimestamps,{index: true});
module.exports = mongoose.model('Events', eventsSchema);