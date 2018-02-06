const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const mongoose = require('mongoose');
const InfoSchema = require('../models/info');

const Info = mongoose.model('Info', InfoSchema);

router.post('/register', (req, res, next) => {

    let newUser = new User({
        username: req.body.username,
        password: req.body.password,
        en: {
            info: new Info({
                name: req.body.username,
                greeting: 'Hello, feel free to make your own thing :)'
            })
        }
    });

    // ENGLISH IS A FALLBACK LANGUAGE SO I WANT TO HAVE IT ON REG

    if (req.body.l10n !== 'en') {
        const greetings = {
            pl: 'Cześć, sprawdź śmiało jak to działa :)',
            es: 'Hola, inténtalo tú mismo :)',
            fr: 'Salut, le essaye toi :)'
        }
        newUser[req.body.l10n] = {
            info: new Info({
                name: req.body.username,
                greeting: greetings[req.body.l10n]
            })
        };
    }

    User.getUserByUsername(newUser.username, (err, user) => {
        if (err) throw err;
        if (user) {
            res.json({success: false, msg:'Username already taken'});
        }else {
            User.addUser(newUser, (err, user) => {
                if (err) {
                    res.json({success: false, msg:'Failed to register user'});
                }else {
                    const token = jwt.sign({data: user.username}, config.secret, {expiresIn: "5h" });
                    res.json({
                        success: true,
                        token: 'JWT ' + token,
                        user: {
                            id: user._id,
                            username: user.username,
                        }
                    });
                }
            });
        }
    });
});

router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    
    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({success: false, msg:'User not found'});
        }
        User.comparePassword(password, user.password, (err, match) => {
            if (err) throw err;
            if (match) {
                const token = jwt.sign({data: user.username}, config.secret, {
                    expiresIn: "5h"
                });
                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        username: user.username,
                    }
                });
            } else {
                return res.json({success: false, msg:'Wrong password'});
            }
        });
    });
});

router.get('/profile', (req, res, next) => {
    res.json({user: req.user});
});

module.exports = router;