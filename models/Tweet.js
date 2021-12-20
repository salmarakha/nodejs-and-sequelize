const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the schema of the table
const Tweet = sequelize.define("Tweet", {
    id: {
        type: DataTypes.INTEGER(11), // standered for id
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    content: {
        type: DataTypes.STRING(480),
        // define getter as part of a property
        get: function () {
            let content = this.getDataValue('content');
            return "Content: " + content;
        }
    }
});

module.exports = Tweet;