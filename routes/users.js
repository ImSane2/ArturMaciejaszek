const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

router.post('/register', (req, res, next) => {
    let newUser = new User({
        username: req.body.username,
        password: req.body.password,
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({success: false, msg:'Failed to register user'});
        }else {
            // res.json('JWT' + token);
            // res.json({success: true, msg:'User registered'});
            const token = jwt.sign({data: user}, config.secret, {expiresIn: "5h" });
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
                const token = jwt.sign({data: user}, config.secret, {
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

router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({user: req.user});
});

module.exports = router;