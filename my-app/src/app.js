const express = require('express');
const path = require('path');
const app = express();


// define static path:
const staticPath = path.join(__dirname,"../public");
//builtin middleware

app.use(express.static(staticPath))

app.get("/", (req, res)=>{
    res.send("home page")
})

app.get("/about", (req, res)=>{
    res.send("about page")
})


app.listen(3000,()=>{
    console.log("listening from port 3000");
})