const mongoose = require('mongoose');

const SkillsSchema = module.exports = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    proficiency: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    img: {
        type: String
    },
    imgSrc: {
        type: String
    }
});

