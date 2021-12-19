const Tweet = require('../models/Tweet');
const sequelize = require('../config/connection');

const addTweet = (tweetContent) => {
    console.log(tweetContent);
    return Tweet.create({ content: tweetContent});
}

module.exports = {
    addTweet
}