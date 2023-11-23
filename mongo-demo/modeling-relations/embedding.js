const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/playground")
.then(()=>console.log("connected to mongodb"))
.catch((error)=>console.log("could not connect to mongodb", error))

const authorSchema =  new mongoose.Schema({
    name:String,
    bio:String,
    website: String
})
const Author = mongoose.model('Author',authorSchema);

const Course = mongoose.model( 'Course', new mongoose.Schema({
    name: String,
    author: authorSchema  
}))

async function createCourse(name,author){
    const course = new Course({
        name, 
        author
    });

    const result = await course.save();
    console.log(result);
}

async function listCourse(){
    const courses = await Course.find();
    console.log(courses);
}

//update author is easu deu to embedding author document inside course document
async function updateAuthor(coursesId){
 const course = await Course.findByIdAndUpdate({_id: coursesId}, {
    $set:{
        author:{
            name:'subhadip'
        }
    }

 })
 console.log(course)
}



// createCourse('node js', new Author({
//     name:'Mosh'
// }));

listCourse();
// updateAuthor('655f39c5976ee00107fbb129');