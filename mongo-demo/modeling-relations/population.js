const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/playground")
.then(()=>console.log("connected to mongodb"))
.catch((error)=>console.log("could not connect to mongodb", error))


const Author = mongoose.model('Author', new mongoose.Schema({
    name:String,
    bio:String,
    website: String
}));

const Course = mongoose.model( 'Course', new mongoose.Schema({
    name: String,
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Author'
    }
}))


async function createAuthor(name, bio, website){
    const author = new Author({
        name, 
        bio, 
        website
    });

    const result = await author.save();
    console.log(result);
}

async function createCourse(name, author){
    const course = new Course({
        name, 
        author
    });

    const result = await course.save();
    console.log(result);
}

async function listCourse(){
    const course = await Course
    .find()
    .select('name author')// to show name along with author
//  .populate('author')     // to show complete author 
    .populate('author', 'name -_id')// to show  author with only name field and remove _id
  //.populate('category')        // now if we have another field named 'category' which is refernce to another 'category' collection we can show it with another population method along with above 
    console.log(course);

}

// createAuthor('subha', 'my bio', 'my website');

// createCourse('my course 2', "655edc01ca957516ac26a878")

listCourse();