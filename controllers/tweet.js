const Tweet = require('../models/Tweet');
const { Op } = require("sequelize");


const addTweet = (tweetContent) => {
    console.log(tweetContent);
    return Tweet.create(tweetContent);
}

const searchTweets = (query) => {
    console.log(query);
    return Tweet.findAndCountAll({ where: { content: { [Op.like]: `%${query}%`} } })
}

module.exports = {
    addTweet,
    searchTweets
}