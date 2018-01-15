const mongoose = require('mongoose');

const WorkSchema = module.exports = mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    cLogo: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    responsibilities: {
        type: [String]
    },
})
