const User = require('../models/User');


const getById = (userId) => {
    console.log(userId);
    // findById is replaced with findByPk
    return User.findByPk(userId)
}

const addUser = (userData) => {
    return User.create(userData);
}

module.exports = {
    getById,
    addUser
}