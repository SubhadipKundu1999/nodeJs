const express = require("express");
const router = express.Router();
const Joi = require("joi");
const mongoose = require("mongoose");

// variables
const genres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Horror' },
    { id: 3, name: 'Romance' }
];


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

// routes

router.get('/', async (req, res) => {
    const genres = await Genre.find().sort({name:1})
    res.json(genres);
})

router.post("/", async (req, res) => {

    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let genre =  new Genre({ name: req.body.name });
    genre = await genre.save();

    res.send(genre);
})

router.put("/:id", async (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);


    const genre = await  Genre.findByIdAndUpdate(req.params.id, {name:req.body.name}, {
        new:true
    })
    if(!genre) return res.status(400).send('The genre with the given ID is not found')

    res.send(genre);
})


router.delete("/:id", async (req, res) => {

    const genre = await Genre.findByIdAndDelete(req.params.id)
    if(!genre) return res.status(400).send('The genre with the given ID is not found')

    res.send(genre);
})


module.exports = router;