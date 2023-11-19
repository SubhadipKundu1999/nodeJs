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

//customize views diractory
// to use template engine we have a views dir. in root dir and html file should be there
// but if we want we can keep views dir anywhere we can want,and we can chnge dir name from views to any thing so for that we have to set views:

const templatePath = path.join(__dirname,"../templates/views");
app.set('views', templatePath);


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