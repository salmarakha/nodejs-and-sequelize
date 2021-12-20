const express =require('express');
const router = express.Router();
const { getById, addUser, editUser, removeUser } = require('../controllers/user');


router.get('/:id', findById);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);


function findById (req, res, next) {
    const { id: userId } = req.params
    getById(userId)
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

function updateUser (req, res, next) {
    const { id } = req.params;
    const { body: newData } = req;
    editUser(id, newData)
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => next(err));
}

function deleteUser (req, res, next) {
    const { id } = req.params;
    removeUser(id)
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => next(err));
}

module.exports = router;