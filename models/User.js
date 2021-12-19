const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

// create the schema of the table
const User = sequelize.define("Tweet", {
    id: {
        type: Sequelize.INTEGER(11), // standered for id
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: Sequelize.STRING(15),
    },
    lastName: {
        type: Sequelize.STRING(15),
    }
});

module.exports = User;