const connection = require('../config/database')
const { getAllUsers } = require('../services/CRUDService')

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', {listUsers: results})
}

const getABC = (req, res) => {
    res.send('check abc')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = (req, res) => {
    res.render('edit.ejs')
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    
    console.log('>>> email: ', email,' name: ', name,' city: ', city)

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) 
        VALUES (?, ?, ?)`, 
        [email, name, city], 
    );

    console.log('>>> results: ', results)
    res.send('created new user succeeded');

    // connection.query(
    //     'select * from Users u',
    //     function (err, results, fields) {
    //         console.log(">>> result = ", results)
    //     }
    // )

    // const [results, fields] = await connection.query('select * from Users u ')
}

module.exports = { 
    getHomepage,
    getABC,
    getHoiDanIT,
    getCreatePage,
    getUpdatePage,
    postCreateUser
};