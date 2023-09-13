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
        city: String,
        image: String,
        description: String,
    }, 
    { timestamps: true}
);


const Customer = mongoose.model('user', customerSchema);


module.exports = Customer;