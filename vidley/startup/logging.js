const winston = require("winston");

module.exports= function(){
 // handle uncaught exception
 process.on('uncaughtException', (ex)=>{
    winston.error(ex.message);
})
 // handle unhandle promice rejection
 process.on('unhandledRejection',(ex)=>{
    throw ex;
 })

winston.add(new winston.transports.File({filename:'logfile.log'}))
// save error to database
// winston.add(new winston.transports.MongoDB({db:'mongodb://0.0.0.0:27017/vidley'}));

}
