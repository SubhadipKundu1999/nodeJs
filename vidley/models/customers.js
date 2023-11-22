const Joi = require("joi");
const mongoose = require("mongoose");


// customers schema and model


const Customer = mongoose.model('Customer',  new mongoose.Schema({
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

}) )




// function to validate genre

function validateCustomer(data) {
    const schema = Joi.object({
        name: Joi.string()
            .min(3)
            .max(30)
            .required(),

        phone: Joi.string()
            .min(10)
            .max(13)
            .required(), 

        isGold: Joi.boolean()     
    })
    const validation = schema.validate({ name: data.name, phone:data.phone, isGold:data.isGold });
    return validation;
}


module.exports ={ validateCustomer, Customer}