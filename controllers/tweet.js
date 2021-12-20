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

const findAllTweets = (page, limit) => {
    const offset = (page - 1) * limit || 0;
    return Tweet.findAndCountAll({ offset: offset || 0, limit: Number(limit) || 10 });
}

module.exports = {
    addTweet,
    searchTweets,
    findAllTweets
}