const mongoose = require("mongoose");

//connection

 mongoose.connect("mongodb://0.0.0.0:27017/playground")
 .then(()=>console.log("connected to mongodb"))
 .catch((error)=>console.log("could not connect to mongodb", error))



 //schema

 const courseSchema =new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{type:Date, default:Date.now},
    isPublished:Boolean
 })

// creating a model:
const Course = mongoose.model('Course', courseSchema);



// create course function
async function createCourse(){

    // creating a course document
    const course = new Course({
    name:"Node js Course",
    author:"Mosh",
    tags:["node", "backend"],
    isPublished:true
     })

    // saveing a document 
    const result = await course.save();
    console.log(result);
    }


// get course query function

async function getCourse(){
    const course = await Course
                  .find({author:'Subha', isPublished:false})
                  .limit(10)
                  .sort({name:1})
                  .select({_id:0, name:1, tags:1});
    console.log(course);              
}


getCourse();

