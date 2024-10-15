const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  gpa: {
    type: Number,
    required: false,
  },
  major: {
    type: String,
    required: false,
  },
  graduationYear: {
    type: Number,
    required: false,
  }
});

module.exports = mongoose.model('User', userSchema);
