const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    cropType: {
        type: String,
        enum: ['bajra', 'chickpeas', 'groundnut', 'jowar', 'maize', 'pigeon peas', 'ragi'],
        required: true
    },
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    cropImageURL: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Settings', settingsSchema); 