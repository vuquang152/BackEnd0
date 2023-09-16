const User = require('../models/user');
const { uploadSingleFile, uploadMultipleFiles } = require('../services/fileService.js')

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

const postUploadSingleFileApi = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No file uploaded");
    };

    let result = await uploadSingleFile(req.files.image);
    
    return res.send("upload single file successful ");
}

const postUploadMultipleFilesApi = async (req, res) => {
    if(!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No file uploaded");
    }

    if(Array.isArray(req.files.image)) {
        //upload multiple files
        let result = await uploadMultipleFiles(req.files.image);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    } else {
        // upload single file
        return await postUploadSingleFileApi(req, res);
    }
}


module.exports = {
    getUsersApi,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadSingleFileApi,
    postUploadMultipleFilesApi,
};