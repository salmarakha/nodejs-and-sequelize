const express = require('express');
const router = express.Router();
const { addTweet, searchTweets, findAllTweets } = require('../controllers/tweet');

router.get('/', getTweets);
router.get('/search', search);
router.post('/', createTweet);

function createTweet (req, res, next) {
    const { body: tweetContent } = req;
    addTweet(tweetContent)
    .then(result => {
        res.status(201).json({ message: "New Tweet created", tweet: result });
    })
    .catch(err => next(err)); 
}

function getTweets (req, res, next) {
    const { page, limit } = req.query;
    findAllTweets(page, limit)
    .then(result => {
        res.json(result);
    })
    .catch(err => next(err));
}

function search (req, res, next) {
    const { q: query } = req.query;
    searchTweets(query)
    .then(result => {
        res.json(result)
    })
    .catch(err => next(err));
}

module.exports = router;