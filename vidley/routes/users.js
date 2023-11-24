const express = require("express");
const router = express.Router();
var _ = require('lodash'); //loadsh
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

    newUser = await newUser.save();

    res.json(  _.pick(req.body,['name','email']));
})


module.exports= router;

/* Why Lodash?
Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc. Lodash’s modular methods are great for:

Iterating arrays, objects, & strings
Manipulating & testing values
Creating composite functions



# _.pick(object, [paths])

Creates an object composed of the picked object properties.

Arguments
object (Object): The source object.
[paths] (...(string|string[])): The property paths to pick.
Returns
(Object): Returns the new object.

Example
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }
*/

