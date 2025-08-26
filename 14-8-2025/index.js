const express= require('express');
const bookRoutes = require('./routes/book');
const eventRoutes = require('./routes/event');
const app = express();
const connectionToDB = require('./connection');
app.use(express.json());
app.use(bookRoutes);
app.use(eventRoutes);
connectionToDB();
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});