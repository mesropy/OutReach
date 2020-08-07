'use strict';
const log = console.log

// Express
const express = require('express');
const app = express();
// CORS
const cors = require('cors')

// Mongo and Mongoose
const { mongoose } = require('./db/mongoose');
const { ObjectID } = require('mongodb')

// Deprecation Warnings
mongoose.set('useFindAndModify', false);

// Mongoose Models
const { User } = require('./models/user')
const { Poll } = require('./models/poll')

// Express Middleware
const bodyParser = require('body-parser')
app.use(bodyParser.json());

/* Session Handling */

// Create a session cookie
app.use(
    session({
        secret: "oursecret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 600000, // 10 mins, increase?
            httpOnly: true
        }
    })
);

// route to login and create a session
app.post("/login", (req, res) => {
    const name = req.body.name;
    const password = req.body.password;

    User.findByNamePassword(name, password)
        .then(user => {
            // Add the user's id to the session cookie.
            req.session.userId = user._id;
            req.session.name = user.name;
            // send the new global state
            if (user.name === "admin"){
              res.send({
                isLoggedIn: true,
                isAdmin: true,
                username: user.name });
            } else {
              res.send({
                isLoggedIn: true,
                isAdmin: false,
                username: user.name }); 
            }
        })
        .catch(error => {
            res.status(400).send()
        });
});

// route to logout a user and remove the session
app.get("/logout", (req, res) => {
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send()
        }
    });
});

/* Database routes */

// User Routes

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

/* Poll Routes */

// Create Poll
/*
Request body expects:
{
    "question": <Poll Question Name>
    "answers": <List of options as Strings>
    "active": <true or false>
}
Returned JSON: The finished poll
*/
// POST /poll
app.post('/poll', (req, res) => {

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log("Issue with mongoose connection")
        res.status(500).send("Internal Server Error")
        return;
    }

    // Create list of PollAnswer Objects
    const pollAnswers = []
    for (let i=0; i < req.body.answers.length; i++) {
        pollAnswers.push({
            option: req.body.answers[i],
            votes: 0
        })
    }
    // Make the Poll
    const newPoll = new Poll({
        question: req.body.question,
        answers: pollAnswers,
        active: req.body.active
    })
    // Save to database
    newPoll.save().then((result) => {
        res.send(result)
    }).catch((error) => {
        res.status(400).send("Bad Request")
        return;
    })
})

// Get the Active Poll
// GET /poll
app.get('/poll', (req, res) => {

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log("Issue with mongoose connection")
        res.status(500).send("Internal Server Error")
        return;
    }

    const query = {'active': true}
    // Get the active poll
    Poll.find(query).then((activePoll) => {
        if (activePoll.length === 0) {
            res.status(404).send("Resource Not Found.")
        } 
        else {
            res.send(activePoll[0])
        }
    }).catch((error) => {
        log(error)
        res.status(500).send("Internal Server Error.")
    })
})

// Update the Active Poll
/*
Request Body Expects:
[
    {"op": "replace", "path": "/answers", "value": newAnswers}
]
*/
// PATCH /poll
app.patch('/poll', cors(), (req, res) => {

     // check mongoose connection established.
     if (mongoose.connection.readyState != 1) {
        log("Issue with mongoose connection")
        res.status(500).send("Internal Server Error")
        return;
    }
    // Get the fields that need to be updated
    const fieldsToUpdate = {}
    req.body.map((change) => {
        const propertyToChange = change.path.substr(1)
        fieldsToUpdate[propertyToChange] = change.value
    })

    const query = {'active': true}
    Poll.findOneAndUpdate(query, fieldsToUpdate, {new: true}, function(err, doc) {
        if (err) {
            res.status(500).send("Internal Server Error")
            return ;
        }
        if (!doc) {
            res.status(404).send("Resource Not Found.")
            return ;
        }
        else {
            res.send(doc);
        }
    }).catch((error) => {
        res.status(500).send("Internal Server Error.")
    })
})

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