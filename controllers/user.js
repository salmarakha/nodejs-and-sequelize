const User = require('../models/User');


const getById = (userId) => {
    console.log(userId);
    // findById is replaced with findByPk
    return User.findByPk(userId)
}

const addUser = (userData) => {
    return User.create(userData);
}

const editUser = async (id, newData) => {
    await User.update(newData, { where: { id: id }, returning: true });
    return User.findByPk(id); // return after update
}

const removeUser = async (id) => {
    const deletedUser = User.findByPk(id);
    await User.destroy({ where: { id: id } });
    return deletedUser;
}

module.exports = {
    getById,
    addUser,
    editUser,
    removeUser
}