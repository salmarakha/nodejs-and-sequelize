const express = require('express');
const router = express.Router();
const tweetRouter = require('../routes/tweet');

router.use('/tweet', tweetRouter);

module.exports = router;