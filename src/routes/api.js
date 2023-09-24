const express = require('express')
const routerAPI = express.Router()

const {getUsersApi, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileApi, postUploadMultipleFilesApi} = require('../controllers/apiController');

const {postCreateCustomerApi, postCreateArrayCustomerApi, getAllCustomersApi, putUpdateCustomerApi} = require('../controllers/customerController');

routerAPI.get('/users', getUsersApi);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileApi);
routerAPI.post('/files', postUploadMultipleFilesApi);

routerAPI.post('/customers', postCreateCustomerApi);
routerAPI.post('/customers-many', postCreateArrayCustomerApi);
routerAPI.get('/customers', getAllCustomersApi);
routerAPI.put('/customers', putUpdateCustomerApi);

module.exports = routerAPI;
