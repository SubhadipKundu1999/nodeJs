const winston = require('winston');


const logger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    transports: [new winston.transports.Console()],
  });

module.exports = function(req, res, neext){

   logger.error('something went wrong');
    
    //log the exception
    res.status(500).send('internal server error');
}