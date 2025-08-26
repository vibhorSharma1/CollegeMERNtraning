const express = require('express');
const app = express();
const studens = require('./students.json');
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, Students');
});

app.get("/students", (req, res) => {
    res.json(studens);
});

app.get("/students/:id", (req, res) => {
    const studentId = parseInt(req.params.id, 10);
    const student = studens.find(s => s.id === studentId);
    if (student) {
        res.json(student);
    } else {
        res.status(404).send('Student not found');
    }
});

app.post("/add-student", (req, res) => {
    const newStudent = req.body;
    if (!newStudent.name || !newStudent.age) {
        return res.status(400).send('Name and age are required');
    }
    newStudent.id = studens.length ? studens[studens.length - 1].id + 1 : 1;
    studens.push(newStudent);
    res.status(201).json(newStudent);
});

app.delete("/delete-student/:id", (req, res) => {
    const studentId = parseInt(req.params.id, 10);
    const index = studens.findIndex(s => s.id === studentId);
    if (index !== -1) {
        studens.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Student not found');
    }
});

app.post("edit-student/:id", (req, res) => {
    const studentId = parseInt(req.params.id, 10);
    const student = studens.find(s => s.id === studentId);
    if (!student) {
        return res.status(404).send('Student not found');
    } else {
        const updatedData = req.body;
        student.name = updatedData.name || student.name;
        student.age = updatedData.age || student.age;
        res.json(student);
    }
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});