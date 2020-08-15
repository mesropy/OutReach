'use strict';
const log = console.log

// Express
const express = require('express');
const app = express();
// CORS
const cors = require('cors')
app.use(cors())

// Mongo and Mongoose
const { mongoose } = require('./db/mongoose');
const { ObjectID } = require('mongodb')

// Deprecation Warnings
mongoose.set('useFindAndModify', false);

// Mongoose Models
const { User } = require('./models/user')
const { Poll } = require('./models/poll')
const { Message } = require('./models/message')
const { Admin } = require('./models/admin')

// Express Middleware
const bodyParser = require('body-parser')
app.use(bodyParser.json());


// Express-session for managing user sessions
const session = require("express-session");
app.use(bodyParser.urlencoded({ extended: true }));

/* Session Handling */

// Middleware for authentication of resources
const authenticate = (req, res, next) => {
    // if a user/admin is logged in
    if (! req.session.userId) {
        req.isAnon = true;
        req.isAdmin = false;
        req.isUser = false;
    }
    else if (req.session.userId) {
        req.isAnon = false;
        if (req.session.name.startsWith("admin")) {
            req.isAdmin = true;
            req.isUser = false;
        } else {
            req.isAdmin = false;
            req.isUser = true;
        }
    }
    next();
}

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

    const isAdmin = name.startsWith("admin");
    if (isAdmin) {
      Admin.findByNamePassword(name, password)
        .then(admin => {
            // Add the admin's id and name to the session cookie.
            req.session.userId = admin._id;
            req.session.name = admin.username;
            // send the new global user state
            const result = {currentUserId: admin._id }
            res.send(result);
        })
        // admin with given name and password does not exist
        .catch(error => {
            res.status(400).send()
        });
    } else {
      // get user document based on name and password
      User.findByNamePassword(name, password)
          .then(user => {
              // Add the user's id and name to the session cookie.
              req.session.userId = user._id;
              req.session.name = user.username;
              // send the new global user state
              res.send({currentUserId: user._id });
          })
          // user with given name and password does not exist
          .catch(error => {
              res.status(400).send()
          });
    }
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

// route to check if a user is logged in on the session cookie
app.get("/user/check-session", (req, res) => {
    if (req.session.userId) {
        res.send({ currentUserId: req.session.userId, currentUser: req.session.name});
    } else {
        res.status(401).send();
    }
});

/* Database routes */

/* User Routes */

// Get all Users
// GET /users
app.get('/users', authenticate, (req, res) => {
    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log("Issue with mongoose connection")
        res.status(500).send("Internal Server Error")
        return;
    }

    if (req.isAdmin) {
        // Get all users
        User.find().then((user) => {
            if (user.length === 0) {
                res.status(404).send("Resource Not Found.")
            }
            else {
                res.send(user)
            }
        }).catch((error) => {
            log(error)
            res.status(500).send("Internal Server Error.")
        })
    } else {
        res.status(401).send("Unauthorized")
    }
    
})

// Get User by ID
// GET /users/:id
app.get('/users/:id', authenticate, (req, res) => {
    const id = req.params.id

    // Check if ID is valid
    if (!ObjectID.isValid(id)) {
        res.status(404).send()
        return;
    }

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log("Issue with mongoose connection")
        res.status(500).send("Internal Server Error")
        return;
    }

    if (req.isAdmin || req.isUser) {
        User.findById(id).then(result => {
            if (!result) {
                res.status(404).send("No User Found");
                return ;
            } else {
                const resultToSend = {user: result}
                res.send(resultToSend);
                return ;
            }
        })
    } else {
        res.status(401).send("Unauthorized")
    }
})
// Create User
/*
Request body expects:
{
    "username": <Username>
    "password": <Plain Password>
    "dob": <YYYY-MM-DD>
    "phone": <Number>
    "city": <Location of the user>
}
Returned JSON: The added User
*/
// POST /user
app.post('/user', (req, res) => {
    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log("Issue with mongoose connection")
        res.status(500).send("Internal Server Error")
        return;
    }

    // Make the User
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        dob: req.body.dob,
        phone: req.body.phone,
        city: req.body.city,
        public: true    // By default
    })

    // Save to database
    newUser.save().then((result) => {
        res.send(result)
    }).catch((error) => {
        log(error)
        res.status(400).send("Bad Request")
        return;
    })
})

// patch user

// delete user
app.delete('/user/:id', authenticate, (req, res) => {

    const id = req.params.id

    // Check if ID is valid
    if (!ObjectID.isValid(id)) {
        res.status(404).send()
        return;
    }

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
       log("Issue with mongoose connection")
       res.status(500).send("Internal Server Error")
       return;
   }

   if (req.isAdmin) {
        User.findByIdAndDelete(id, function(err, doc) {
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
   } else {
       res.status(401).send("Unauthorized")
   }
})

// Patch User
/*
Request Body Expects:
[
    {"op": "replace", "path": "/public", "value": <true or false>},
]
Returned JSON: The updated User
*/
// PATCH /user/:id
app.patch('/user/:id', authenticate, (req, res) => {

    const id = req.params.id
    // Check if ID is valid
    if (!ObjectID.isValid(id)) {
        res.status(404).send()
        return;
    }

     // check mongoose connection established.
     if (mongoose.connection.readyState != 1) {
        log("Issue with mongoose connection")
        res.status(500).send("Internal Server Error")
        return;
    }

    if (req.isAdmin || (req.isUser && req.session.userId === id)) {
        // Get the fields that need to be updated
        const fieldsToUpdate = {}
        req.body.map((change) => {
            const propertyToChange = change.path.substr(1)
            fieldsToUpdate[propertyToChange] = change.value
        })

        User.findByIdAndUpdate(id, fieldsToUpdate, {new: true}, function(err, doc) {
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
    } else {
        res.status(401).send("Unauthorized.")
    }
})

/* Message Routes */

// Get All Messages
// GET /message
app.get('/message', (req, res) => {

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log("Issue with mongoose connection")
        res.status(500).send("Internal Server Error")
        return;
    }

    // Get all messages
    Message.find().then((message) => {
        if (message.length === 0) {
            res.status(404).send("Resource Not Found.")
        }
        else {
            res.send(message)
        }
    }).catch((error) => {
        log(error)
        res.status(500).send("Internal Server Error.")
    })
})

// Get Messages from a specific User
// GET /message/:id
app.get('/message/:id', (req, res) => {

    const id = req.params.id

    // Check if ID is valid
    if (!ObjectID.isValid(id)) {
        res.status(404).send()
        return;
    }

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log("Issue with mongoose connection")
        res.status(500).send("Internal Server Error")
        return;
    }

    // Get all messages from the User
    const query = {author: id}
    Message.find(query).then(result => {
        if (!result) {
            res.status(404).send("No Messages Found");
            return ;
        } else {
            res.send(result);
        }
    })
})

// get message by MessageId

// Get Messages of a specific city
// GET /message/:city
app.get('/message/:city', (req, res) => {
    const cityToGet = req.params.city

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log("Issue with mongoose connection")
        res.status(500).send("Internal Server Error")
        return;
    }

    // Get all messages of a city
    const query = {city: cityToGet}
    Message.find(query).then(result => {
        if (!result) {
            res.status(404).send("No Messages Found");
            return ;
        } else {
            res.send(result);
        }
    })
})

// Create a Message
/*
Request body expects:
{
    text: <Text Containing the message>,
    date: <Date of Posting as YYYY-MM-DD HH:MM>,
    location: <Coordinates of Message as X and Y values and Name>,
    city: <Name of city the message is in>,
    published: <False if Pending, True if Published>,
    author: User ID
}
Returned JSON: The added Message
*/
// POST /message
app.post('/message', authenticate, (req, res) => {

    // Check if ID is valid
    if (!ObjectID.isValid(req.body.author)) {
        res.status(404).send()
        return;
    }

    // Check if the current user is also the author
    if (req.session.userId !== req.body.author) {
        res.status(404).send("Bad Request")
        return ;
    }

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log("Issue with mongoose connection")
        res.status(500).send("Internal Server Error")
        return;
    }

    User.findById(req.body.author).then(result => {
        if (!result) {
            res.status(404).send("No User Found");
            return ;
        } else {
            // Make the Message
            const newMessage = new Message({
                text: req.body.text,
                date: req.body.date,
                location: req.body.location,
                city: req.body.city,
                published: req.body.published,
                author: req.body.author
            })

            // Save to database
            newMessage.save().then((message) => {
                res.send(message)
            }).catch((error) => {
                log(error)
                res.status(400).send("Bad Request")
                return;
            })
        }
    })
})

// Patch Message
/*
Request Body Expects:
[
    {"op": "replace", "path": "/published", "value": <true or false>},
]
Returned JSON: The updated Message
*/
// PATCH /message
app.patch('/message/:id', authenticate, (req, res) => {

    const id = req.params.id
    // Check if ID is valid
    if (!ObjectID.isValid(id)) {
        res.status(404).send()
        return;
    }

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

    Message.findByIdAndUpdate(id, fieldsToUpdate, {new: true}, function(err, doc) {
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

// Delete Message
/*
id is the id of the Message to delete
Returned JSON: The deleted message
*/
// DELETE /message/:id
app.delete('/message/:id', authenticate, (req, res) => {

    const id = req.params.id

    // Check if ID is valid
    if (!ObjectID.isValid(id)) {
        res.status(404).send()
        return;
    }

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
       log("Issue with mongoose connection")
       res.status(500).send("Internal Server Error")
       return;
   }

   Message.findByIdAndDelete(id, function(err, doc) {
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

/* Admin Routes */

// Create an Admin
/*
Request body expects:
{
    "username": <Username>
    "password": <Plain Password>
}
Returned JSON: The added Admin
*/
// POST /admin
app.post('/admin', (req, res) => {

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log("Issue with mongoose connection")
        res.status(500).send("Internal Server Error")
        return;
    }

    // Make the Admin
    const newAdmin = new Admin({
        username: req.body.username,
        password: req.body.password,
    })

    // Save to database
    newAdmin.save().then((result) => {
        res.send(result)
    }).catch((error) => {
        log(error)
        res.status(400).send("Bad Request")
        return;
    })
})

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
app.post('/poll', authenticate, (req, res) => {
    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log("Issue with mongoose connection")
        res.status(500).send("Internal Server Error")
        return;
    }

    if (req.isAdmin) {
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
    } else {
        res.status(401).send("Unauthorized.")
    }
})

// Get all Polls
// GET /polls
app.get('/polls', authenticate, (req, res) => {

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log("Issue with mongoose connection")
        res.status(500).send("Internal Server Error")
        return;
    }

    if (req.isAdmin) {
        // Get all polls
        Poll.find().then((poll) => {
            if (poll.length === 0) {
                res.status(404).send("Resource Not Found.")
            }
            else {
                res.send(poll)
            }
        }).catch((error) => {
            log(error)
            res.status(500).send("Internal Server Error.")
        })
    } else {
        res.status(401).send("Unauthorized.")
    }
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
    {"op": "replace", "path": "/question", "value": newQuestion},
    {"op": "replace", "path": "/answers", "value": newAnswers},
    {"op": "replace", "path": "/active", "value": <true or false>}
]
Returned JSON: The updated poll
*/
// PATCH /poll
app.patch('/poll/:id', (req, res) => {

    const id = req.params.id
    // Check if ID is valid
    if (!ObjectID.isValid(id)) {
        res.status(404).send()
        return;
    }

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

    Poll.findByIdAndUpdate(id, fieldsToUpdate, {new: true}, function(err, doc) {
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

// Delete Poll
/*
id is the id of the Poll to delete
Returned JSON: The deleted poll
*/
// DELETE /poll
app.delete('/poll/:id', authenticate, (req, res) => {

    const id = req.params.id

    // Check if ID is valid
    if (!ObjectID.isValid(id)) {
        res.status(404).send()
        return;
    }

    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
       log("Issue with mongoose connection")
       res.status(500).send("Internal Server Error")
       return;
   }

   if (req.isAdmin) {
        Poll.findByIdAndDelete(id, function(err, doc) {
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
   } else {
       res.status(401).send("Unauthorized")
   }
   
})

/* End Database routes */


// Serve the build
app.use(express.static(__dirname + "/client/build"));

// Routes
app.get("*", (req, res) => {
    const goodPageRoutes = ["/", "/WorldMap", "/Register", "/Login", "/admin", "/Toronto", "/Paris", "/Montr%C3%A9al"];
    if (!(goodPageRoutes.includes(req.url) || req.url.startsWith("/user/"))) {
        // if url not in expected page routes, set status to 404.
        res.status(404).send("Invalid Page");
        return;
    }

    // send index.html
    res.sendFile(__dirname + "/client/build/index.html");
});

// Express Server Listening
const port = process.env.PORT || 5000

app.listen(port, () => {
	log(`Listening on port ${port}...`)
})
