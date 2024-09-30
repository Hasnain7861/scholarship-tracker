// backend/controllers/userController.js

const User = require('../models/User');

// Register User
const createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error creating user', error: err.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && user.password === password) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(400).json({ error: 'Invalid email or password' });
    }
  } catch (err) {
    res.status(400).json({ error: 'Error logging in' });
  }
};

module.exports = { createUser, loginUser };
