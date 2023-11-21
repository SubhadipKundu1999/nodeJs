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

// comparision Query operator:

/*
$eq --> equal to          $ne --> not equal to

$gt --> greater than      $lt--> less than

$lte--> less than or equal to    $gte--> greater than or equal to    

$in --> matches any of the value specified in an array

$nin ---> matches none of the value specified in any array

example:
 ## let we have to select those course which have price <= 1000
     
 --> Courses.find({ price: { $lte : 1000 } })

  ## let we have to select those course which have price in betwwen 10 t0 100
     
 --> Courses.find({ price: { $lte : 100, gte:10 } })

 ## let we have to select those course which have price  either 10, 20 or 50;
     
 --> Courses.find({ price: { $in : [10, 20, 25 ] } })

   */



// logical Query operator

  /*
     $and , $not, $nor, $or

     example :
     ### let get the course author -> "Subha" or isPublished:true
     --> Courses,find().
     or([{author:"Mosh"}, {isPublished: true}]);

  */

    const course = await Course
                  .find({author:'Subha', isPublished:false})
                  .limit(10)
                  .sort({name:1})
                  .select({_id:0, name:1, tags:1});
    console.log(course);              
}

getCourse();

