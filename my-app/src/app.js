const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs')


// define static path:
const staticPath = path.join(__dirname,"../public");

//builtin middleware
// app.use(express.static(staticPath))




//set up view engine
app.set('view engine', 'hbs')

// dynamic content
app.get("/", (req, res)=>{
    res.render('index.hbs')
})
app.get("/about", (req, res)=>{
    res.render("about")
})


app.listen(3000,()=>{
    console.log("listening from port 3000");
})