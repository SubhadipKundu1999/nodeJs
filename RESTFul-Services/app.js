const express = require('express');
const app = express();
const Joi = require("joi");
const log = require('./logger-middleware');
const auth = require('./auth-middleware');

// middleware
app.use(express.json()); //-> 
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

// custom middleware
app.use(log);
app.use(auth)

const port = process.env.PORT ||3000;


//how to write w=enviroment basis code

/* 
in more  complex and industry enterprise like application
 we have to know in what environments code is running 
is it production enviroment or development environment 
 and set certain feature based on the environment 
*/
console.log(process.env.NODE_ENV); //undefined if not set
console.log("app:", app.get('env'));  // by defalut it will show development

// let use morgan() middleware to print or log http requests in development environment
const morgan = require("morgan");
if(app.get('env')==='development'){
    app.use(morgan('tiny')); //--->GET / 304 - - 3.671 ms 
    console.log('morgan enabled');
}




//GET REQUESTS

app.get('/',(req, res)=>{
   res.send('hello world'); 
});

app.get('/api/courses',(req, res)=>{
    res.send([1,2,3,4,]);
})

app.get('/api/courses/:id',(req, res)=>{
    res.send(req.params.id);
})


app.get('/api/posts/:year/:month',(req, res)=>{
    res.send(req.params);
                /*
                {
  "year": "2018",
  "month": "march"
} */


})
app.get("/api/users/",(req, res)=>{
    res.send(req.query);
})


// courses array
const courses =[
    {
        id:0,
        name:'nodeJs'
    },
    {
        id:1,
        name:'mongoDB'
    },
    {
        id:2,
        name:'React'
    }
]

//////////////////////////////////////////// handling post requests

app.post("/api/courses/",(req, res)=>{
    // custom input validation
       // if(!req.body.name || req.body.name.length<3){

    //     res.status(400).send("name is required and should be minimum 3 character");
    // }

    // input validation using Joi npm package
const schema = Joi.object({
    name: Joi.string().min(3).required()
})


const result =schema.validate({name: req.body.name});
console.log(result);


if(result.error){
  return res.send(result.error);
}
    const course={
        id:courses.length+1,
        name:req.body.name,
    }
    courses.push(course);
    res.send(course);


})


//////////////////////////////////////////// handling put requests


app.put("/api/courses/:id", (req, res)=>{
    // look up the course
    // if not existing return 404
  const course = courses.find(c=> c.id===parseInt(req.params.id));
  if(!courses) res.status(404).send('the courses withgiven id was not available');


     // validate 
    // if not validate return 400- bad request
   // input validation using Joi npm package   
const schema = Joi.object({
    name: Joi.string().min(3).required()
})

const result =schema.validate({name: req.body.name});
console.log(result);


if(result.error){
   return  res.send(result.error);
}
// update course
// return the updated course
    res.send(course);
})





app.listen(port, ()=>{
    console.log("listening from port ", port)
})
