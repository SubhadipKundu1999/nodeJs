//  require("winston-mongodb");
const express = require("express");
const dotenv = require('dotenv')

const app = express();
dotenv.config();


require('./startup/logging')()
require('./startup/routes')(app);
require('./startup/connection')();



// env variables
const port = process.env.PORT || 3000;

// listening
app.listen(port, () => {
    console.log("listening from port ", port);
})