const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const Tweet = require('./Tweet');

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
    email: {
        type: DataTypes.STRING(50),
        validate: {
            isEmail: true,
            notNull: true 
        },
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(100),
        validate: {
            notNull: true 
        },
        allowNull: false
    },
    fullName: {
        type: DataTypes.VIRTUAL,
        get () {
            return `${this.getDataValue('firstName')} ${this.getDataValue('lastName')}`
        }
    }
});

// override .toJSON to prevent password from returning
User.prototype.toJSON = function () {
    return Object.assign({}, {...this.get(), password: undefined});
}

// User.hasMany(Tweet, { 
//     foreignKey: 'userId',
//     onDelete: 'CASCADE' 
// });

// Hook (instance hook)
User.beforeCreate(async (user, options) => {
    const hashedPassword = await hashPassword(user.password);
    user.password = hashedPassword;
});

function hashPassword(password) {
    console.log(password)
   return bcrypt.hash(password, 10);
}

module.exports = User;