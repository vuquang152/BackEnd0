const Customer = require('../models/customer');

const createCustomerService = async (customerData) => {
    try {
        let result = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            image: customerData.image,
            description: customerData.description,
        });

        return result;
    } catch (err) {
        console.log(err);
        return null;
    }
}

module.exports = { createCustomerService }