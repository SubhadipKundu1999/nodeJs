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



//update course

async function DeleteCourse(id){

  const result = await Course.deleteOne({author:'Subhadip'});
  console.log(result)
}
const id = '655c9b0423979af8a98f52f'

DeleteCourse(id);

