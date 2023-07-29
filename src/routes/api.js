const express = require('express')
const routerAPI = express.Router()

const {getUsersApi, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI} = require('../controllers/apiController');

routerAPI.get('/users', getUsersApi);

routerAPI.post('/users', postCreateUserAPI);

routerAPI.put('/users', putUpdateUserAPI);

routerAPI.delete('/users', deleteUserAPI);

module.exports = routerAPI;
