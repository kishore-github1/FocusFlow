const express = require('express')
const router = express.Router();

router.post('/signUp',async (req,res)=>{
    try{
    const {username, email, password }= req.body;

    const new_user = new User({name : username, email : email, password: password});
    await new_user.save();
    res.status(201).json({message: 'User created Successfully'});
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
});

