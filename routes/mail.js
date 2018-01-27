const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const config = require('../config/credentials');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.transporter,
      pass: config.password
    }
  });

router.post('/', (req, res, next) => {
    const options = {
        from: '',
        to: config.recipient,
        subject: "CV query from: " + req.body.name,
        text: "You\'ve got an email from: " + req.body.name +" at "+ req.body.email + "\n\n" + req.body.query
    }
    transporter.sendMail(options, (err, msg) => {
        if (err) {
            res.send(err)
        }else {
            res.send(true)
        }
    })
});

module.exports = router;
