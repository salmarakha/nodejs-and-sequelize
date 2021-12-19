const express = require('express');
const router = express.Router();
const { addTweet } = require('../controllers/tweet');

router.get('/', (req, res, next) => {
    // a function should handle the logic
    res.json({testData: "Some Dummy text"});
});

router.post('/', createTweet);

function createTweet (req, res, next) {
    const { content: tweetContent } = req;
    addTweet(tweetContent).then(result=> {
        res.status(201).json({ message: "New Tweet created", tweet: result });
    })
    .catch(err => next(err)); 
}

module.exports = router;