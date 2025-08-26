const mongoose = require('mongoose');
async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/merntraining2025', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connection successful');
  } catch (error) {
    console.error('Database connection error:', error);
  }
}