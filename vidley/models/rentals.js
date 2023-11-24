const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi)
const mongoose = require("mongoose");


const Rental = mongoose.model('Rental', new mongoose.Schema({
    customer :{
        type:
        new mongoose.Schema({
            name:{
                type:String,
                required:true,
                minLength:3,
                maxLength:30
            }, 
            isGold:{
                type:Boolean,
                default:false
            },
            phone:{
                type:String,
                required:true,
                minLength:10,
                maxLength:13
            }, 
        }),
        required: true
    },
    movie: {
        type: new mongoose.Schema({
        
            title:{
                type:String,
                required:true,
                trim: true,
                minLength:5,
                maxLength:255,  
            },
            dailyRentalRate:{
                type: Number,
                required:true,
                min:0,
                max:255
            }
            }),
    required: true
    },
    dateOut:{
        type:Date,
        required: true,
        default: Date.now
    },
    dateReturned:{
        type: Date
    },
    rentalFee:{
        type: Number, 
        min:0
    }
    
}))


function validateRental(rental){

    const schema = Joi.object(
        {
            customerId:Joi.objectId(). required(),
            movieId: Joi.objectId().required()
       
    })
    const validation = schema.validate({customerId: rental.customerId, movieId: rental.movieId});
    return validation;

}

module.exports ={ validateRental, Rental}