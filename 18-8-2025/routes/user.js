const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');
const Student = require('../models/Student');

router.get("/login", (req, res) => {
    res.render("login");
    
});

router.post("/loginUser", (req, res) => {
    UserController.userAuth(req, res);
});
router.get("/register", (req, res) => {
    res.render("register");
}); 
router.post("/addUser", (req, res) => {
    UserController.addUser(req, res);
});
router.get("/dashboard",async (req, res) => {
    const students=await Student.find({});
    res.render("home",{students:students});    
});



module.exports = router;