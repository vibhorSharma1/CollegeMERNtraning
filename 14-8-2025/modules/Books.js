const mongoose = require('mongoose');
const mongooseTimestamps = require('mongoose-timestamps');
const bookSchema = new mongoose.Schema({
    bookId:{type:Number, required:true, unique:true},
    bookName:{type:String, required:true},
    isBnNo:{type:String, required:true, unique:true},
    authorName:{type:String, required:true},
    price:{type:Number, required:true},
    createdAt:Date,
    updatedAt:Date
});

bookSchema.plugin(mongooseTimestamps,{index: true});
module.exports = mongoose.model('Book', bookSchema);