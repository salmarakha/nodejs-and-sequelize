const Tweet = require('./Tweet');
const User = require('./User');

module.exports = function () {
    // 1 to many relationship between tweets and users
    // Tweet.belongsTo(User);
    User.hasMany(Tweet, { foreignKey: 'userId' });
}