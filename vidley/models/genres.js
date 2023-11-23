const Joi = require("joi");
const mongoose = require("mongoose");


// genres schema and model
 const genreSchema =  new mongoose.Schema({

    name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    }
})

const Genre = mongoose.model('Genre',genreSchema  )

// function to validate genre

function validateGenre(genre) {
    const schema = Joi.object({
        name: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
    })
    const validation = schema.validate({ name: genre.name });
    return validation;
}


module.exports ={ Genre, validateGenre, genreSchema }