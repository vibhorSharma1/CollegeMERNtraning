const mongoose = require('mongoose');

async function connectionToDB(){
    try{
        await mongoose.connect('mongodb://localhost:27017/merntraining2025', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectionToDB;