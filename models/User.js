const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the schema of the table
const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER(11), // standered for id
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING(15),
        validate: {
            is: ["^[a-z]+$",'i'],     // will only allow letters
        }
    },
    lastName: {
        type: DataTypes.STRING(15),
        validate: {
            is: ["^[a-z]+$",'i'],     // will only allow letters
        }
    },
    fullName: {
        type: DataTypes.VIRTUAL,
        get () {
            return `${this.getDataValue('firstName')} ${this.getDataValue('lastName')}`
        }
    }
},
{
    // Define getter as part of the model
    // this will be deprecated
    // getterMethods: {
    //     // this.firstName will trigger fields getters
    //     // use getDataValue('firstName') instead to get the raw data
    //     fullname: function () { return this.firstName + " " + this.lastName }
    // },
});

module.exports = User;