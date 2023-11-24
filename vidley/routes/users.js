const express = require("express");
const router = express.Router();
const { User, validateUser } = require("../models/users");

// register

router.post("/", async (req, res) => {

    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const oldUser = await User.findOne({email:req.body.email});
    if(oldUser)  return res.status(400).send("this email id is already registered");

    

    let newUser =  new User(
        { 
        name: req.body.name ,
        email: req.body.email ,
        password: req.body.password 
        }
    );

    newUser = await newUser.save();
    res.json({
        name:newUser.name,
        email: newUser.email
    });
})


module.exports= router;