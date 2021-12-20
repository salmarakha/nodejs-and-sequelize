const express = require('express');
const router = express.Router();
const { addTweet, searchTweets } = require('../controllers/tweet');

router.get('/', (req, res, next) => {
    // a function should handle the logic
    res.json({testData: "Some Dummy text"});
});

router.get('/search', (req, res, next) => {
    // a function should handle the logic
    const { q: query } = req.query;
    searchTweets(query)
    .then(result => {
        res.json(result)
    })
    .catch(err => next(err));
});

router.post('/', createTweet);

function createTweet (req, res, next) {
    const { body: tweetContent } = req;
    addTweet(tweetContent)
    .then(result => {
        res.status(201).json({ message: "New Tweet created", tweet: result });
    })
    .catch(err => next(err)); 
}

module.exports = router;