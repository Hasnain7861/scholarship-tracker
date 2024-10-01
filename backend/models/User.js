const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    GPA: {
        type: Number,
        required: true,
    },
    major: {
        type: String,
        required: true,
    },
    
}, { timestamps: true });
