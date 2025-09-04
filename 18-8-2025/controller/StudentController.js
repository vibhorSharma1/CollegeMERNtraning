const Student = require('../models/Student');
const clodinary = require('cloudinary').v2;

async function addStudent(req, res) {
    try {
        console.log('Adding Student:', req.body);
        console.log('Uploaded file:', req.file);

        let studentData = {
            ...req.body,
            studentImage: req.file ? req.file.filename : null  // yahan file ka naam/path save karo
        };

        let student = new Student(studentData);
        await student.save();

        res.redirect("/user/dashboard");
    } catch (error) {
        console.error("❌ Error adding Student:", error);
        res.status(500).send('Error adding student');
    }
}


const deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.redirect("/student/listStudent");
  } catch (err) {
    res.status(500).send("Error deleting student");
  }
};

// ✅ Show Edit Form
const editStudentForm = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).send("Student not found");
    res.render("editStudent", { student });
  } catch (err) {
    res.status(500).send("Error loading edit form");
  }
};

// ✅ Update Student
const updateStudent = async (req, res) => {
  try {
    const { rollNo, studentName, fatherName, course, branch, yearOfAdmission } = req.body;

    await Student.findByIdAndUpdate(req.params.id, {
      rollNo,
      studentName,
      fatherName,
      course,
      branch,
      yearOfAdmission,
    });

    res.redirect("/student/listStudent");
  } catch (err) {
    res.status(500).send("Error updating student");
  }
};

module.exports = {
    addStudent,
    deleteStudent,
    editStudentForm,
    updateStudent
};