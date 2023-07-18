const express = require('express')
const router = express.Router()
const { getHomepage, getABC, getHoiDanIT, getCreatePage, getUpdatePage, postCreateUser } = require('../controllers/homeController')

router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/hoidanit', getHoiDanIT); 
router.get('/create', getCreatePage); 
router.get('/update', getUpdatePage); 


router.post('/create-user', postCreateUser); 


module.exports = router;
