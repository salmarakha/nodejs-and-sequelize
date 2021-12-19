const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

// create the schema of the table
const Tweet = sequelize.define("Tweet", {
    id: {
        type: Sequelize.INTEGER(11), // standered for id
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    content: Sequelize.STRING(480),
});

module.exports = Tweet;