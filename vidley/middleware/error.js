const winston = require('winston');

module.exports = function(req, res, next){

   winston.error('error foud in server');
    
    //log the exception
    res.status(500).send('internal server error');
}