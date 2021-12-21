const User = require('../models/User');
const Tweet = require('../models/Tweet');


const getById = async (userId) => {
    // console.log(await User.findByPk(userId));
    
    // Lazy Loading
    const user = await User.findByPk(userId);
    console.log(await user.getTweets());
    // Eager Loading
    return User.findByPk(userId, { include: Tweet });
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