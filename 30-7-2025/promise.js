let si=0;
function simpleInterest(principal, rate, time) {
    let pr=new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(time<0) reject("Time cannot be negative");
        si = (principal * rate * time) / 100;
        resolve(si);
    }, 3000);
    });
    return pr;
}
function display() {
    console.log("Simple Interest is: " + si);
}

simpleInterest(1000, 10, 2).
then((result) => {
    si = result;
    display(); // This will show the calculated simple interest after 3 seconds
}).catch((error) => {
    console.error("Error calculating simple interest:", error);
});
 // This will show 0 because the calculation hasn't completed yet
