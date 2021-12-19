const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({testData: "Some Dummy text"});
});

module.exports = router;