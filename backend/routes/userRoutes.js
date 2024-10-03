const express = require('express');
const { createUser, loginUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register', createUser);  // Register route
router.post('/login', loginUser);      // Login route

module.exports = router;
