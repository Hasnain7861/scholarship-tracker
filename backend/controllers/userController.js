const User = require('../models/User');  

const createUser = async (req, res) => {
  const { email, password } = req.body;
  console.log('Request body:', req.body);
  
  // Check if email or password are missing
  if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
      const newUser = new User({ email, password });
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
      console.error('Error creating user:', err); 
      res.status(400).json({ error: 'Error creating user', details: err.message });
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
