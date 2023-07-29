const User = require('../models/user');

const getUsersApi = async (req, res) => {
    let results = await User.find({});

    return res.status(200).json({
        errorCode: 0,
        data: results,
    });
}

const postCreateUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let user = await User.create({
        email: email, 
        name: name, 
        city: city
    })

    return res.status(200).json({
        errorCode: 0,
        data: user,
    });
}

const putUpdateUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;
    
    let user = await User.updateOne({_id: userId}, {name: name, email: email, city: city});

    return res.status(200).json({
        errorCode: 0,
        data: user,
    });
}

const deleteUserAPI = async (req, res) => {
    const id = req.body.userId;
    let result = await User.deleteOne({_id: id});

    return res.status(200).json({
        errorCode: 0,
        data: result,
    });
}

module.exports = {
    getUsersApi,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
};