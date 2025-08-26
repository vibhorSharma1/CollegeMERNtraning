const express = require('express');
const router = express.Router();
const Student = require('../models/Student');


const studentController = require('../controller/StudentController');

router.get("/addStudent", (req, res) => {
    res.render("addStudent");
});


router.post("/addstudent", (req, res) => {
    console.log("Adding Student:", req.body);
    studentController.addStudent(req, res);    
});

// ✅ Delete student
router.post("/delete/:id", studentController.deleteStudent);

// ✅ Show Edit form
router.get("/edit/:id", studentController.editStudentForm);

// ✅ Update student (form submit)
router.post("/update/:id", studentController.updateStudent);

router.get("/listStudent",async(req,res)=>{
    const students= await Student.find({});
    console.log(students);

    res.render("listOfStudents",{students:students});
});

module.exports = router;