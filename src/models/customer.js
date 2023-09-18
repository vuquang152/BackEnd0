const mongoose = require('mongoose');

// shape data
const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        address: String,
        phone: Number,
        email: String,
        image: String,
        description: String,
    }, 
    { timestamps: true}
);


const Customer = mongoose.model('Customer', customerSchema);


module.exports = Customer;