const express = require('express')
const router = express.Router()
const { getHomepage, getABC, getHoiDanIT, getCreatePage, getUpdatePage, 
        postCreateUser, postUpdateUser, postDeleteUser, postHandleRemoveUser } = require('../controllers/homeController')

router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/hoidanit', getHoiDanIT); 
router.get('/create', getCreatePage); 
router.get('/update/:id', getUpdatePage); 


router.post('/create-user', postCreateUser); 
router.post('/update-user', postUpdateUser); 
router.post('/delete-user/:id', postDeleteUser);
router.post('/delete-user', postHandleRemoveUser);

module.exports = router;
