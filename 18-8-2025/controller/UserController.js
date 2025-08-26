const User= require('../models/User');
const Student= require('../models/Student');
const bcrypt = require('bcrypt');
async function addUser(req, res) {
  try {
    console.log('Adding User:', req.body);

    let user = new User(req.body);

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    console.log("Hashed Password:", user.password);

    // Save to DB
    await user.save();

    // Sirf ek response do
    res.redirect("/user/login");
  } catch (error) {
    console.error("❌ Error adding User:", error);
    res.status(500).send("Error adding User");
  }
}

  

async function userAuth(req, res) {
  try {
    console.log("User Authentication:", req.body);

    const { email, password } = req.body;

    // Pehle email se user find karo
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).send("Invalid email or password");
    }

    // Password compare karo
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send("Invalid email or password");
    }

    // Agar match ho gaya to students nikal ke render karo
    const students = await Student.find({});
    res.render("home", { students: students });

  } catch (error) {
    console.error("❌ Auth Error:", error);
    res.status(500).send("Error during authentication");
  }
}


module.exports = {
    addUser ,
    userAuth
};