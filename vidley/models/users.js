const mongoose = require("mongoose")
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const  jwt = require("jsonwebtoken");

const userSchema =  new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        maxLength: 50,
    },
    email: {
        type: String,
        unique: true

    },
    password: {
        type: String,
        minLength: 6

    }
})


// generate token methods

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign(
        { email: this.email },
        process.env.JWT_SECRET_CODE,
        { expiresIn: '1h' }
        );
    return token;
}

const User = mongoose.model('User',userSchema)


function validateUser(user) {

    const schema = Joi.object({

        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().required() .email(),
        password:  passwordComplexity({
            min:6,
            max:30,
            lowerCase: 1,
            upperCase: 1,
            numeric: 1,
            symbol: 1,
            requirementCount:6,
          })
      
    })

const validation = schema.validate({name: user.name, email: user.email, password: user.password}) 

return validation

}

module.exports={User, validateUser};