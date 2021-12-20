const User = require('../models/User');


const getById = (tweetId) => {
    return User.findById(tweetId)
}

const addUser = (userData) => {
    return User.create(userData);
}

module.exports = {
    getById,
    addUser
}