const express = require("express");
const router = express.Router();


const {Customer, validateCustomer}  =  require("../models/customers");


// routes

router.get('/', async (req, res) => {
    const customers = await Customer.find().sort({name:1})
    res.json(customers);
})


router.post("/", async (req, res) => {

    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let customer =  new Customer({ name: req.body.name, phone: req.body.phone, isGold: req.body.isGold });
    customer = await customer.save();

    res.send(customer);
})


router.put("/:id", async (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);


    const customer = await  Customer.findByIdAndUpdate(req.params.id, {name:req.body.name, phone:req.body.phone, isGold: req.body.isGold }, {
        new:true
    })
    if(!customer) return res.status(400).send('The genre with the given ID is not found')

    res.send(customer);
})


router.delete("/:id", async (req, res) => {

    const customer = await Customer.findByIdAndDelete(req.params.id)
    if(!customer) return res.status(400).send('The genre with the given ID is not found')

    res.send(customer);
})


module.exports = router;