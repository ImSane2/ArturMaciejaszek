const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const StateSchema = require('./state');
// const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    en: StateSchema,
    pl: StateSchema,
    es: StateSchema,
    fr: StateSchema,
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
    const query = {username: username};
    User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hashed) => {
            if (err) throw err;
            newUser.password = hashed;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function(checkedPass, hashed, callback) {
    bcrypt.compare(checkedPass, hashed, (err, match) => {
        if (err) throw err;
        callback(null, match);
    });
}

module.exports.saveData = function(data, callback) {
    const query = {username: data.username};
    User.findOneAndUpdate(query, data , callback);
}
