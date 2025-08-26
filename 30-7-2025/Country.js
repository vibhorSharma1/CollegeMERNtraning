let countryArray=["India", "USA", "Canada", "Australia", "Germany"];
let emp=[
    { id:1,name: "John", age: 30, country: "USA" },
    {id:2, name: "Alice", age: 25, country: "Canada" },
    {id:3, name: "Bob", age: 35, country: "India" },
    {id:4, name: "Charlie", age: 28, country: "Australia" },
];
function searchCountry(country) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (countryArray.includes(country)) {
                resolve(`${country} is found in the list.`);
            } else {
                reject(`${country} is not found in the list.`);
            }
        }, 2000);
    });
}
function findEmp(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const employee = emp.find(e => e.id === id);
            if (employee) {
                resolve(employee);
            } else {
                reject(`Employee with ID ${id} not found.`);
            }
        }, 2000);
    });
}

findEmp(2)
.then((employee) => {   
    console.log(`Employee found: ${employee.name}, Age: ${employee.age}, Country: ${employee.country}`);
})
.catch((error) => {
    console.error(error); // This will show an error message if the employee is not found
});


searchCountry("Canada")
.then((message) => {
    console.log(message); // This will show "Canada is found in the list." after 2 seconds
})
.catch((error) => {
    console.error(error); // This will show an error message if the country is not found
});

