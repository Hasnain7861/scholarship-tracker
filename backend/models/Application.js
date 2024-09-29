const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    scholarship: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Scholarship',
        required: true,
    },
    status: {
        type: String,
        enum: ['applied', 'pending', 'approved', 'rejected'],
        default: 'applied',
    },
    documents: [
        {
            type: String, // URL or path to the document
        }
    ],
    appliedAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

module.exports = mongoose.model('Application', ApplicationSchema);
