const mongoose = require('mongoose');

const SocialSchema = mongoose.Schema({
    name: String,
    icon: String,
    link: String
});

const InfoSchema = module.exports = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    greeting: {
        type: String,
        required: true
    },
    socials: [{
        type: SocialSchema
    }]
})


