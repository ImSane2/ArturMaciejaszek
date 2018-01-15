const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const db = require('../config/database');

router.post('/get', (req, res, next) => {
    const username = req.body.username;
    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (user) {
            res.json(user);
            res.json({success: true, msg:"Data successfully fetched"});
        }
    })
});

router.put('/save', (req, res, next) => {
    const data = req.body;

    User.saveData(data, (err, user)=> {
        if (err) throw err;
        if (!user) {
            res.json({success: false, msg:"User not found"});
        }
        if (user) {
            res.json({success: true, msg:'User data saved'});
        }
    })
});

module.exports = router;