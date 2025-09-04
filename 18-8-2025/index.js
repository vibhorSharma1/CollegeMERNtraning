const express= require('express');
const path= require('path');
const connect=require("./connections")
const user=require("./routes/user");
const student=require("./routes/student");
const app= express();
connect();
app.use(express.urlencoded({ extended: false }));
app.use('/user',user);
app.use('/student',student);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/',(req,res)=>{
    res.redirect('/user/login');
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});