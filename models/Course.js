// /backend/models/Course.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true }, // In hours
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
