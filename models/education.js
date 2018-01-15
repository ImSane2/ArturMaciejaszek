const mongoose = require('mongoose');

const EduSchema = module.exports = mongoose.Schema({
    school: {
        type: String,
        required: true
    },
    logo: {
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
    type: {
        type: String,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    courses: {
        type: [{
            courseName: String,
            mark: Number,
            description: String,
            tags: [String]
        }],
        required: true
    },
})

