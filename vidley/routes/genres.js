const express = require("express");
const router = express.Router();
const {Genre, validateGenre} = require("../models/genres");
const auth = require('../middleware/auth');
const admin = require("../middleware/admin");
// routes

router.get('/',auth,  async (req, res) => {
    const genres = await Genre.find().sort({name:1})
    res.json(genres);
})

router.post("/",auth,  async (req, res) => {

    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let genre =  new Genre({ name: req.body.name });
    genre = await genre.save();

    res.send(genre);
})

router.put("/:id",auth,  async (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);


    const genre = await  Genre.findByIdAndUpdate(req.params.id, {name:req.body.name}, {
        new:true
    })
    if(!genre) return res.status(400).send('The genre with the given ID is not found')

    res.send(genre);
})


router.delete("/:id", [auth, admin], async (req, res) => {  // add one more middleware to check user is admin

    const genre = await Genre.findByIdAndDelete(req.params.id)
    if(!genre) return res.status(400).send('The genre with the given ID is not found')

    res.send(genre);
})


module.exports = router;