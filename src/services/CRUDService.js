const connection = require('../config/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Users u ')
    return results;
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query('select * from Users u where u.id = ?', [userId])
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const updateUserById = async (email, city, name, userId) => {
    let [results, fields] = await connection.query(
        `UPDATE Users 
        SET email = ?, name = ?, city = ? 
        WHERE id = ?`, 
        [email, name, city, userId], 
    );
}

const deleteUserById = async (id) => {
    let [results, fields] = await connection.query(
        `DELETE FROM Users WHERE id = ?`, 
        [id], 
    );

}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
}