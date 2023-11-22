const mongoose = require("mongoose");

//connection
 mongoose.connect("mongodb://0.0.0.0:27017/playground")
 .then(()=>console.log("connected to mongodb"))
 .catch((error)=>console.log("could not connect to mongodb", error))



 // Schema //

 const courseSchema =new mongoose.Schema({
    name:{
      type:String, 
      required:[true, "Name field is required"],
      minLength:3,
      maxLength:100
    
    },
    author:{
      type:String,
      required:[ true, "Author name is required"]
    },
    
    tags:{
      type:Array,
      // custom validator
      validate:{
        validator: function(v){
          return v.length > 0 ;
        },
        message:'A course should have at least one tag.'

      }

    },

    category:{
      type:String,
      required:[true, "category field is required with one of the value -> web mobile, network "],
      enum:['web', 'mobile', 'network'] ,    },
    date:{type:Date, default:Date.now},
    isPublished:Boolean,
    
    price:{
      type:Number,
      required: function(){ return this.isPublished}, //price is required when course is published,
      get:v=>Math.round(v),
      set: v=> Math.round(v)
    }
 })


 // creating a model:
const Course = mongoose.model('Course', courseSchema);

 async function createCourse(){
   const course = new Course({
    name:"csS",
    tags:['frontend', 'design'],
    author:'bristi Kundu',
    category :'web',
    isPublished:false,
    price:120.6
   });

   try{
    const result =await course.save();
    console.log(result);
   }
   catch(err){
    //handling validation errors
    for(field in err.errors){
      console.log(field) // category, naem, tags
      console.log(err.errors[field].properties.message)
    }
   }
 } 

 createCourse();




