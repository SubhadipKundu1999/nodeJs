const express = require('express');

const app = express();

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



app.listen(port, ()=>{
    console.log("listening from port ", port)
})