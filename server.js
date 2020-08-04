'use strict';
const log = console.log

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'src')));

// Mongo and Mongoose
const bodyParser = require('body-parser')
app.use(bodyParser.json());

const { ObjectID } = require('mongodb')
const { mongoose } = require('./db/mongoose');
const { User } = require('./models/user')

/* Database routes */
// get users

// get user by id

// get messages by uid

// get message by uid, mid

// post user

// post message

// patch user

// patch message

// delete user

// delete message
/* End Database routes */

const port = process.env.PORT || 5000

app.get('/ping', function (req, res) {
	return res.send('pong');
});

app.listen(port, () => {
	log(`Listening on port ${port}...`)
}) 