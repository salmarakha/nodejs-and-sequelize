const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

// create the schema of the table
const User = sequelize.define("User", {
    id: {
        type: Sequelize.INTEGER(11), // standered for id
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: Sequelize.STRING(15),
        validate: {
            is: ["^[a-z]+$",'i'],     // will only allow letters
        }
    },
    lastName: {
        type: Sequelize.STRING(15),
        validate: {
            is: ["^[a-z]+$",'i'],     // will only allow letters
        }
    },
},
{
    // Define getter as part of the model
    getterMethods: {
        // this.firstName will trigger fields getters
        // use getDataValue('firstName') instead to get the raw data
        fullname: function () { return this.firstName + " " + this.lastName }
    },
});

module.exports = User;