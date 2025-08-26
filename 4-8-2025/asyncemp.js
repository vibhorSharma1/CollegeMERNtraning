let emp=[
    {id:1, name:"John", age:30, department:"HR"},
    {id:2, name:"Jane", age:25, department:"Finance"},
    {id:3, name:"Mike", age:35, department:"IT"}
]

function getEmployeeById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const employee = emp.find(e => e.id === id);
            if (employee) {
                resolve(employee);
            } else {
                reject(new Error("Employee not found"));
            }
        }, 1000);
    });
}
function getBasicSalary(department) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const salaries = {
                HR: 50000,
                Finance: 60000,
                IT: 70000
            };
            if (salaries[department]) {
                resolve(salaries[department]);
            } else {
                reject(new Error("Department not found"));
            }
        }, 1000);
    });
}

async function manageEmployee(id){
    try {
        const employee = await getEmployeeById(id);
        console.log("Employee Details:", employee);
        
        const salary = await getBasicSalary(employee.department);
        console.log(`Basic Salary for ${employee.department}: $${salary}`);
        
    } catch (error) {
        console.error("Error:", error.message);
    }
}

manageEmployee(2);