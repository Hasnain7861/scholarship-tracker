const express = require('express');
const { createUser, loginUser, updateUserProfile } = require('../controllers/userController');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);  

// Update user profile route
router.put('/updateProfile/:userId', updateUserProfile);

module.exports = router;
