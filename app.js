const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./config/database');

mongoose.connect(config.database, {useMongoClient: true});

mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => {
    console.log('Successfully connected to database');
});

mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

const app = express();

const users = require('./routes/users');
const contact = require('./routes/mail');
const manager = require('./routes/manager');

// const port = process.env.PORT || 8080;
app.set('port', (process.env.PORT || 8080));

app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.use('/contact', contact);

app.use('/manager', manager);

app.get('/', (req, res) => {
    res.send('Invalid endpoint');
})

// 

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });