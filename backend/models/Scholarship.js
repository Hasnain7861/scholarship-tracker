const mongoose = require('mongoose');

const ScholarshipSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    criteria: {
        GPA: Number,
        major: String,
        
    },
    amount: {
        type: Number,
    },
    deadline: {
        type: Date,
    },
    
}, { timestamps: true });

module.exports = mongoose.model('Scholarship', ScholarshipSchema);
