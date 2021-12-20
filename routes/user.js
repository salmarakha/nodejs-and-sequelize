const express =require('express');
const router = express.Router();
const { getById, addUser } = require('../controllers/user');


router.get('/:id', findById);
router.post('/', createUser)

function findById (req, res, next) {
    const { id: tweetId } = req.params
    getById(tweetId)
    .then(result => {
        res.status(200).json({ user: result })
    })
    .catch(err => next(err));
}

function createUser (req, res, next) {
    const { body: userData } = req;
    addUser(userData)
    .then(result => {
        res.status(201).json(result)
    })
    .catch(err => next(err));
}

module.exports = router;