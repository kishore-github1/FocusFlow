const express = require("express");
const router = express.Router();
const User = require('../mongodb/models/user');

router.post("/signUp", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const new_user = new User({
      name: username,
      email: email,
      password: password,
    });
    await new_user.save();
    res.status(201).json({ message: "User created Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = User.findOne({email: email, password : password});
    if(user){
        res.status(200).json({message : "Login Succesful"});
    }
    else{
        res.status(404).json({message : "User not found"});
    }
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;