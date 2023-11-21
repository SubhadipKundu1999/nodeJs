// 
const express = require("express");

//
const genres = require("./routes/genres");

const app = express();


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// env variables
const port = process.env.PORT || 3000;

//routers

app.use("/api/genres/", genres);

// listening
app.listen(port, () => {
    console.log("listening from port ", port);
})