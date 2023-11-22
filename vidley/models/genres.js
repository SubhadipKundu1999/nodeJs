const Joi = require("joi");
const mongoose = require("mongoose");


// genres schema and model


const Genre = mongoose.model('Genre',  new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    }
}) )

// function to validate genre

function validateGenre(data) {
    const schema = Joi.object({
        name: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
    })
    const validation = schema.validate({ name: data.name });
    return validation;
}


module.exports ={ Genre, validateGenre}