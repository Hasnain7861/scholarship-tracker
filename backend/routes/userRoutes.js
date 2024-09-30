// backend/routes/userRoutes.js
const express = require('express');
const { createUser, loginUser } = require('../controllers/userController');
const router = express.Router();

// User Registration
router.post('/register', createUser);

// User Login
router.post('/login', loginUser);

module.exports = router;
