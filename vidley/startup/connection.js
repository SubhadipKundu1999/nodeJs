const  Mongoose  = require("mongoose");
const winston = require('winston');

module.exports = function(){
    Mongoose.connect('mongodb://0.0.0.0:27017/vidley')
.then(()=> console.log('Connected to MongoDB...'))
.catch(error => console.log('Could not connect to MongoDB'));
} 