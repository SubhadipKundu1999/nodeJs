const express = require("express");
const Joi = require("joi");
const router = express.Router();
var _ = require('lodash'); //loadsh
const bcrypt = require('bcryptjs');


const { User } = require("../models/users");



// login
router.post("/", async (req, res) => {

    const { error } = validateAuth(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("invalid authentication");

    // verify password
    const ispasswordMatched = await bcrypt.compare(req.body.password, user.password);
    if (!ispasswordMatched)
        return res.status(400).send("invalid authentication");

    const token = user.generateAuthToken();

    res.status(200).json({ result: true, token });

})

//logging out user:

// logging out functionality should be on client side, 
// many developer use to save token in database ande log out by requesting server to delete this token from database.
// but  storeing token in databse lead to make security issue , if any hacker any how got access the database, the can use token to access detail without password

//  so store token to client side and make feature of log out by deleting those token from browser storage. is good option



function validateAuth(user) {

    const schema = Joi.object({

        password: Joi.string().required(),
        email: Joi.string().required().email(),
    })

    const validation = schema.validate({ password: user.password, email: user.email })

    return validation

}


module.exports = router;