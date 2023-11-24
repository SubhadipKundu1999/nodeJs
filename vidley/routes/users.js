const express = require("express");
const router = express.Router();
var _ = require('lodash'); //loadsh
const bcrypt = require('bcryptjs');

const { User, validateUser } = require("../models/users");



// register
router.post("/", async (req, res) => {

    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const oldUser = await User.findOne({email:req.body.email});
    if(oldUser)  return res.status(400).send("this email id is already registered");

    let newUser =  new User(
      _.pick(req.body, ['name','email','password']),
    );

    // hashed password
    var salt =  await bcrypt.genSalt(10);
    newUser.password= await bcrypt.hash(newUser.password, salt);

    await newUser.save();

    res.json(  _.pick(req.body,['name','email']));
})


module.exports= router;