// 
const express = require("express");
const mongoose = require("mongoose");

//
const genres = require("./routes/genres");
const customers = require("./routes/customers");

const app = express();


mongoose.connect('mongodb://0.0.0.0:27017/vidley')
.then(()=> console.log('Connected to MongoDB...'))
.catch(error => console.log('Could not connect to MongoDB'));


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// env variables
const port = process.env.PORT || 3000;

//routers
app.use("/api/genres/", genres);
app.use("/api/customers/", customers);

// listening
app.listen(port, () => {
    console.log("listening from port ", port);
})