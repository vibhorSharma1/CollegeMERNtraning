const express=require("express");
const app=express();
const user=require("./Users.json");
app.use(express.json());
const fs=require("fs");
const userArray=JSON.parse(JSON.stringify(user));
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to the Home Page</h1>");
})

app.get("/users",(req,res)=>{
    // console.log("Fetching users");
    userArray.forEach((user)=>{
        res.write(`<p>Name: ${user.first_name} ${ user.last_name} - Email: ${user.email} - Gender: ${user.gender}</p>`);
    })
})

app.get("/users/:id",(req,res)=>{
    const userId=req.params.id;
    const userFound=userArray.find((user)=>user.id==userId);
    if(userFound){
        res.send(`<h2>User Details</h2>
                  <p>Name: ${userFound.first_name} ${userFound.last_name}</p>
                  <p>Email: ${userFound.email}</p>
                  `);
    }else{
        res.status(404).send("<h2>User not found</h2>");
    }
})
app.get("/user/find/mail/:email",(req,res)=>{
    const email=req.params.email;
    console.log(email);
    const userFound=userArray.find((user)=>user.email===email);
    if(userFound){
        res.send(`<h2>User Details</h2>
                  <p>Name: ${userFound.first_name} ${userFound.last_name}</p>
                  <p>Email: ${userFound.email}</p>
                  `);
    }else{
        res.status(404).send("<h2>User not found</h2>");
    }

})
app.post("/user/edit/:id",(req,res)=>{
    const userId=req.params.id;
    const userFound=userArray.find((user)=>user.id==userId);
    if(userFound){
        userFound.first_name=req.body.first_name || userFound.first_name;
        userFound.last_name=req.body.last_name || userFound.last_name;
        userFound.email=req.body.email || userFound.email;
    }else{
        return res.status(404).send("<h2>User not found</h2>");
    }
    fs.writeFile("./Users.json", JSON.stringify(userArray),(err)=>{
        if(err){
            console.error("Error writing to file", err);
            return res.status(500).send("Internal Server Error");
        }
    });
    console.log("User updated:", userFound);
    res.json(userArray);
})
app.delete("/user/delete/:id",(req,res)=>{
    const userId=req.params.id;
    const userIndex=userArray.findIndex((user)=>user.id==userId);
    if(userIndex===-1){
        return res.status(404).send("<h2>User not found</h2>");
    }
    const deletedUser=userArray.splice(userIndex, 1);
    fs.writeFile("./Users.json", JSON.stringify(userArray),(err)=>{
        if(err){
            console.error("Error writing to file", err);
            return res.status(500).send("Internal Server Error");
        }
    });
    console.log("User deleted:", deletedUser);
    res.json(userArray);
    
})


app.post('/user/add',(req,res)=>{
    // console.log(req.body);
    const newUser={
        id: userArray.length + 1,
        first_name: req.body.first_name || "New",
        last_name: req.body.last_name || "User",
        email: req.body.email || "mail@example",
        gender:req.body.gender || "Not specified"
    }
    userArray.push(newUser);
    fs.writeFileSync("./Users.json", JSON.stringify(user),(err)=>{
        if(err){
            console.error("Error writing to file", err);
            return res.status(500).send("Internal Server Error");
        }
        
    });
    console.log("New user added:", newUser);
    res.json(userArray);
})

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})