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
    authors: [authorSchema]  
}))

async function createCourse(name,authors){
    const course = new Course({
        name, 
        authors: authors
    });

    const result = await course.save();
    console.log(result);
}

async function listCourse(){
    const courses = await Course.find();
    console.log(courses);
}

//update author is easu deu to embedding author document inside course document
async function updateAuthor(courseId, authorId){

    const course = await Course.findById(courseId);
console.log(course)
    const author = course.authors.id(authorId);
    author.deleteOne();
    course.save();

}



// createCourse('node js',[
//     new Author({
//         name:'Mosh'
//     }),
//     new Author({
//         name:'Subha'
//     }),
//     new Author({
//         name:'Atanu'
//     })
// ]);

// listCourse();


updateAuthor('655f3f3371be7b89b7220ef8', '655f3f3371be7b89b7220ef5');