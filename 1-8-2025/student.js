// let students=[
//     {rollNo:1, name:"aman",branch:"CSE",marks:{sem1: 85, sem2: 90, sem3: 88, sem4: 92}},
//     {rollNo:2, name:"rajesh",branch:"ECE",marks:{sem1: 78, sem2: 82, sem3: 80, sem4: 85}},
//     {rollNo:3, name:"sita",branch:"ME",marks:{sem1: 88, sem2: 90, sem3: 85, sem4: 87}},
//     {rollNo:4, name:"ram",branch:"CSE",marks:{sem1: 92, sem2: 95, sem3: 90, sem4: 93}},
//     {rollNo:5, name:"geeta",branch:"ECE",marks:{sem1: 80, sem2: 85, sem3: 82, sem4: 88}}
// ]

// let newStudent={rollNo:6, name:"krishna",branch:"CSE",marks:{sem1: 90, sem2: 92, sem3: 88, sem4: 91}};

// function addStudent(student) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(student.branch == null || student.branch == undefined) {
//                 reject("Branch is required to add a student.");
//                 return;
//             }
//             students.push(newStudent);
//             resolve(students);
//         }, 3000);
//     });
// }
// function findStudent(rollNo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let student = students.find(s => s.rollNo === rollNo);
//             if (student) resolve(student);
//             else reject(`Student with roll number ${rollNo} not found.`);
//         }, 3000);
//     });
// }


// addStudent(newStudent)
// .then(students => {
//     console.log("Updated Students List:", students);
//     return findStudent(1);
// })
// .then(student => {
//     console.log("Found Student:", student);
//     console.log(`Sem1 marks:${student.marks.sem1}, Sem2 marks:${student.marks.sem2}, Sem3 marks:${student.marks.sem3}, Sem4 marks:${student.marks.sem4}`);
//     console.log(`Total Marks: ${student.marks.sem1 + student.marks.sem2 + student.marks.sem3 + student.marks.sem4}`);
// })
// .catch(error => console.error(error));


// function calculateSum(students){
//     students.array.forEach(element => {
        
//     });
// }


const marks={sem1: 85, sem2: 90, sem3: 88, sem4: 92}

marks.forEach((sem)=>{
    console.log(sem);
})
Object.values(marks).reduce((accumulator,currentValue)=>accumulator+currentValue,0);