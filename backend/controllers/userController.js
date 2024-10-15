const User = require('../models/User');  

// Create User
const createUser = async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', userId: newUser._id });
  } catch (err) {
    res.status(400).json({ error: 'Error creating user', details: err.message });
  }
};

// Update User Profile
const updateUserProfile = async (req, res) => {
  const { firstName, lastName, city, state, country, gpa, major, graduationYear } = req.body;
  const userId = req.params.userId;

  try {
    // Validate if userId and required fields are present
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { firstName, lastName, city, state, country, gpa, major, graduationYear },
      { new: true, runValidators: true }  // runValidators ensures Mongoose runs schema validation
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'Profile updated successfully', updatedUser });
  } catch (err) {
    console.error('Error updating profile:', err);
    res.status(500).json({ error: 'Error updating profile' });
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

module.exports = { createUser, loginUser, updateUserProfile };
