const express = require('express');
const { registerUser, authUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', authUser);

// Protected routes can be added here
// Example:
// router.get('/profile', protect, getUserProfile);

module.exports = router;
