'use strict';
const log = console.log

// Express
const express = require('express');
const app = express();

// Mongo and Mongoose
const { mongoose } = require('./db/mongoose');
const { ObjectID } = require('mongodb')

// Mongoose Models
const { User } = require('./models/user')

// Express Middleware
const bodyParser = require('body-parser')
app.use(bodyParser.json());

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



// Test Route
app.get('/ping', function (req, res) {
	return res.send('pong');
});

// Serve the build
app.use(express.static(__dirname + "/client/build"));

// Routes
app.get("*", (req, res) => {
    // const goodPageRoutes = ["/", "/login", "/dashboard"];
    // if (!goodPageRoutes.includes(req.url)) {
    //     // if url not in expected page routes, set status to 404.
    //     res.status(404);
    // }

    // send index.html
    res.sendFile(__dirname + "/client/build/index.html");
});

// Express Server Listening
const port = process.env.PORT || 5000

app.listen(port, () => {
	log(`Listening on port ${port}...`)
}) 