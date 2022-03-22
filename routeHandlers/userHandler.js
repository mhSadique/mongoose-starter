const express = require('express');
const createUser = require('../controllers/user/createUser');
const getUserByEmail = require('../controllers/user/getUserByEmail');
const router = express.Router();

// create a user
router.post('/create', createUser);

// get a user by email
router.get('/:email', getUserByEmail);

module.exports = router;