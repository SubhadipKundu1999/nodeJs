const express = require('express');
const app = express();
const Joi = require("joi");

// middleware
app.use(express.json());

const port = process.env.PORT ||3000;

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

// handling post requests

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
    res.send(result.error);
}
    else{


    const course={
        id:courses.length+1,
        name:req.body.name,
    }
    courses.push(course);
    res.send(course);
}

})



app.listen(port, ()=>{
    console.log("listening from port ", port)
})