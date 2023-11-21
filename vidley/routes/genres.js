const express = require("express");
const router = express.Router();
const Joi = require("joi");

// variables
const genres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Horror' },
    { id: 3, name: 'Romance' }
];

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


router.get('/', (req, res) => {
    res.json(genres);
})

router.post("/", (req, res) => {

    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    console.log(req.body);
    const genre =
    {
        id: genres.length + 1,
        name: req.body.name
    }
    genres.push(genre);
    res.send(genre);
})

router.put("/:id", (req, res) => {

    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('This genres with given id is not find');

    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    genre.name = req.body.name;
    res.send(genre);
})


module.exports = router;