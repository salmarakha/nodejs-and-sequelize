const express = require('express');
const router = express.Router();
const tweetRouter = require('./tweet');
const userRouter = require('./user');

router.use('/tweet', tweetRouter);
router.use('/user', userRouter);

module.exports = router;