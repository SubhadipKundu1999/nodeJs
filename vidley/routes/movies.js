const express = require("express");
const router = express.Router();

const { validateMovie, Movie} = require("../models/movies");
const { Genre} = require("../models/genres")


router.get('/', async (req, res)=>{
const movies =  await Movie.find().sort({title:1});
res.send(movies);
});

router.post ('/', async (req, res)=>{

    const { error } = validateMovie(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    const genre = await Genre.findById(req.body.genreId);
    if(!genre) return res.status(400).send('Invalid genre');

    let movie = new Movie({
        title:req.body.title,
        genre:{
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate : req.body.dailyRentalRate
    })

    movie = await  movie.save() ;
     res.status(201).send(movie);
})

module.exports = router;