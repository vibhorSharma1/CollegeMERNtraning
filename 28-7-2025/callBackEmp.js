
function getEmp(id, callback) {

    setTimeout(() => {
        // return Emp.filter((emp) => {
        //     return emp.id === id;
        // });
        let emp = [];
        for (let i = 0; i < Emp.length; i++) {
            if (Emp[i].id === id) {
                emp = Emp[i];
                break;
            }
        }
        callback({ emp: emp, })
    }, 3000);
}


function getBasicSalary(post, callback) {
    const salaryMap = {
        "Professor": 50000,
        "Associate Professor": 40000,
        "Assistant Professor": 30000
    }
    setTimeout(() => {
        let basicSalary = salaryMap[post];
        if (basicSalary === undefined) {
            console.error("Invalid post provided");
            return;
        }
        callback(basicSalary);
    }, 3000);
}

function calculateGrossSalary(basicSalary, callback) {
    setTimeout(() => {
        const HRA = 0.25 * basicSalary; // 20% of basic salary
        const DA = 7000; // 10% of basic salary
        callback(basicSalary + HRA + DA);
    }, 3000);
}

const Emp = [
    { id: 1, name: "John Doe", post: "Professor" },
    { id: 2, name: "Jane Smith", post: "Associate Professor" },
    { id: 3, name: "Alice Johnson", post: "Assistant Professor" }
];

// let emp1 = getEmp(1);

// To remove the asynchronous nature of getEmp, we can use a callback function
getEmp(1, (emp) => {
    console.log(emp);
    getBasicSalary(emp.emp.post, (basicSalary) => {
        console.log(basicSalary, "basicSalary");
        calculateGrossSalary(basicSalary, (grossSalary) => {
            
            console.log(grossSalary, "grossSalary");
        });
    });
})

// console.log(emp1, "emp1");  Commented out to avoid undefined error

/*let basicSalary = getBasicSalary(emp1[0].post);
console.log(basicSalary, "basicSalary");
let grossSalary = calculateGrossSalary(basicSalary);
console.log(grossSalary, "grossSalary");*/