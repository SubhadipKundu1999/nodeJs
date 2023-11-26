// 
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv')

//
const genres = require("./routes/genres");
const customers = require("./routes/customers");
const movies = require("./routes/movies");
const rentals = require("./routes/rentals");
const users = require("./routes/users");
const auth = require("./routes/auth");
const error = require("./middleware/error");

const app = express();
dotenv.config();

// mongoose.connect('mongodb://0.0.0.0:27017/vidley')
// .then(()=> console.log('Connected to MongoDB...'))
// .catch(error => console.log('Could not connect to MongoDB'));


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// env variables
const port = process.env.PORT || 3000;

//routers
app.use("/api/genres/", genres);
app.use("/api/customers/", customers);
app.use("/api/movies/", movies)
app.use("/api/rentals/", rentals)
app.use("/api/users/", users)
app.use("/api/auth/", auth)

// middleware to handle error
app.use(error);
// listening
app.listen(port, () => {
    console.log("listening from port ", port);
})