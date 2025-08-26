let employees=[
    {id:1,name:"sherrrr",post:"Professor"},
    {id:2,name:"shyam",post:"Assistant Professor"},
    {id:3,name:"Mohan",post:"Lecturer"},
]

let salaries=[
    {post:"Professor",salary:80000},
    {post:"Assistant Professor",salary:60000},
    {post:"Lecturer",salary:40000},
];

function getEmp(id){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            let emp=employees.find(e=>e.id===id);
            if(emp) res(emp);
            else rej(`Employee with ID ${id} not found.`);
        },3000);
    });
}

function getSalary(post){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            let salary=salaries.find(s=>s.post===post);
            if(salary) res(salary.salary);
            else rej(`Salary for post ${post} not found.`);
        },3000);
    });
}

function getGrossSalary(salary){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(salary + salary*0.25 + salary*0.1); // Adding 25% and 10% to the salary
        },3000);
    });
}

getEmp(1)
.then(emp=> getSalary(emp.post) )
.then(salary=> getGrossSalary(salary))
.then(grossSalary=> console.log(`Gross Salary: ${grossSalary}`))
.catch(error=> console.error(error));