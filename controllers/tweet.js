const Tweet = require('../models/Tweet');
const sequelize = require('../config/connection');

const addTweet = (tweetContent) => {
    console.log(tweetContent);
    return Tweet.create(tweetContent);
}

module.exports = {
    addTweet
}