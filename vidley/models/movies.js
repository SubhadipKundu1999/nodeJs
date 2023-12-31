const Joi = require('joi');
const mongoose = require('mongoose');
const {genreSchema}  = require("./genres");

const Movie = mongoose.model('Movies', new mongoose.Schema({

    title:{
        type:String,
        required:true,
        trim: true,
        minLength:5,
        maxLength:255,  
    },
    genre:{
        type: genreSchema,
        required:true
    },
    numberInStock:{
        type: Number,
        required:true,
        min:0,
        max:255
    },

    dailyRentalRate:{
        type: Number,
        required:true,
        min:0,
        max:255
    }

}));


function validateMovie(movie){
console.log(movie);
    const schema = Joi.object({
        title: Joi.string().min(5).max(50).required(),
        genreId: Joi.objectId().required(),
        numberInStock: Joi.number().min(0).required(),
        dailyRentalRate:Joi.number().min(0).required()
    })
    const validation = schema.validate({ title: movie.title, genreId: movie.genreId, numberInStock: movie.numberInStock,dailyRentalRate: movie.dailyRentalRate  });
    return validation;
}


module.exports={ validateMovie, Movie }