# OutReach by team26

Website Link: https://outreach.onrender.com/

## Non-Logged Users
On launch, you are able to browse messages by navigating to city pages using the pins on the world map.  

For now, we have designed webpages for three cities:
* Toronto
* Montréal
* Paris

After accessing the city page, the following information will be displayed on the left-hand side:
* A Safety Information panel which can be accessed by clicking the "i" symbol.  
* The latest data on the total, active, and recovered COVID-19 cases in the city
* An interactive Poll Question related to COVID-19

Messages left by other users are displayed in the city's timeline. You can click on the pin icon to view the location of each message on the city map.  

Note: A non-logged user cannot add their own messages.

## Users

### Login Credentials for User

You can click the "Login" button and use the following credentials to login as a user:
* username: user
* password: user

You can also click the "Sign-Up" button and create your own user profile! You will automatically be logged in after a successful registration.

### Instructions for User

Once you become a user, you are able to add messages to your own city. 

Navigate to your city and click the "New Message" button. You can enter any personal thoughts into the textbox and even set a specific location onto the city's map.

After you click "Post", your message will be sent to an Admin to be approved before being published to all users.

You can also access your personal profile page by clicking on your username in the top-right corner.  

This page lets you access a list of all of your personal messages (including the ones that have not been approved yet).

Press the "Settings" tab to modify your personal settings. You can change your username, password, date-of-birth, and privacy options.

Setting your profile to "Private" will display "anonymous" instead of your username for your messages. Also, other users will not be able to access your profile page.

An Admin will still be able to view your page, even if it is set to Private.

Note: You can access other user personal profiles by clicking on the username in their messages.  

## Admin

### Login Credentials for Admin

An administrator has access to Admin Control. Login using the following credentials to become an admin:
* username: admin
* password: admin

### Instructions for Admin

Click on the "admin" name in the top-right corner to access the admin profile.  

The admin control displays a table of information for all users.

The usernames are linked to each of their profile pages (simply click on the username). Users can be deleted using the "Edit" button.  

The admin control also displays a list of pending messages that need to be reviewed before being published to all users. 

In addition, the Published tab displays all Published messages. Any Published messages that were mistakenly approved can be deleted using the "Edit" button.

The Polls tab lets you view all created polls and the number of votes for each option. You can create new polls and delete preexisting ones. 

You can also activate and deactivate polls using the "Edit" button. Only one poll can be active across all cities.

## New Phase 2 Features

* Heroku
* City Polls
* Displaying COVID-19 Cases data for each city
* Unique user profiles for each user
* Complete revamp of the User Profile Page
  * Change Username and Password options
  * Privacy Settings
  * Message Deletion
  * Different views for non-logged-in users, admin, and the owner
* Importing and Exporting User, Admin, Message, and Poll data to the Cloud Atlas Database
* (Basic) User/Admin Authentication
* Sessions
* Resource Authentication
* Many many front-end improvements...

### Route Overview

#### Routes that do not require logging-in
* GET /polls
  * Returns a list of all Polls in the database
* GET /poll
  * Returns a JSON object containing the current active Poll
* POST /user
  * Creates a new User
  * Request body expects:
    {
        "username": <The Username>,
        "password": <Plain Password>,
        "dob": <YYYY-MM-DD as a String>,
        "phone": <Phone Number as a Number>,
        "city": <Location of the user as a String>
    }
  * Returned JSON: The added User
* POST /login
  * Logs into the site either as an Admin or a User
  * Creates a session
  * Request body expects:
  {
    name: <The username>,
    password: <Plain password>
  }
  * Returned JSON: The logged-in User/Admin's Id
* GET /user/check-session
  * Checks if a session exists
  * Returned JSON: {
      currentUserId: <The User/Admin id>,
      currentUser: <The User/Admin username>
    }
* GET /logout
  * Destroys the session cookie
  * Returns Nothing

#### Routes that require a logged-in session
##### User Routes
* GET /users
  * Returns a list of all User objects in the database
* GET /users/:id
  * Returned JSON: The User associated with the id
* DELETE /user/:id
  * Deletes the User associated with the ID from the database
  * Returned JSON: The User that was deleted
* PATCH /user/:id
  * Changes certain properties of the User associated with the ID
  * Used in User's Profile Page
  * Request Body Expects:
    [
        {"op": "replace", "path": "/public", "value": <true or false>},
        {"op": "replace", "path": "/username", "value": <The new username},
        {"op": "replace", "path": "/password", "value": <The new password},
        {"op": "replace", "path": "/dob", "value": <The new date of birth}
    ]
  * Returned JSON: The changed User object

##### Message Routes
* GET /message
  * Returns a list of all of the messages in the database
  * Used in the Admin Page, and in App.js to create dynamic routing
* GET /message/:id
  * Returns the message associated with the user id
  * Used in the User Page
* GET /message/city/:city
  * Returns a list of messages of the specified city
  * Used in the City Page
* POST /message
  * Creates a Message and saves to the database
  * Used in the City and User Pages
  * Request Body Expects:
    {
        text: <Text Containing the message>,
        date: <Date of Posting as YYYY-MM-DD HH:MM>,
        location: <Coordinates of Message as X and Y values and Name>,
        city: <Name of city the message is in>,
        published: <False if Pending, True if Published>,
        author: <User ID of User this message belongs to>
    }
  * Returned JSON: The newly created Message object
* PATCH /message/:id
  * Changes certain properties of the Message associated with the ID
  * Used in the User Page
  * Request Body Expects:
    [
       {"op": "replace", "path": "/published", "value": <true or false>},
    ]
  * Returned JSON: The changed Message object
* DELETE /message/:id
  * Deletes the Message associated with the ID
  * Used in the Admin and User Pages
  * Returned JSON: The deleted Message object
* POST /admin
  * Creates an admin and saves to the database
  * Request Body Expects:
    {
       "username": <Username>
       "password": <Plain Password>
    }
  * Returned JSON: The created Admin object

##### Poll Routes
* POST /poll
  * Creates a poll and saves it to the database
  * Used in the Admin Page
  * Request Body Expects:
    {
        "question": <Poll Question Name>
        "answers": <List of options as Strings>
        "active": <true or false>
    }
   * Returned JSON: The added Poll object
* PATCH /poll/:id
  * Changes certain properties of the poll with the associated ID
  * Used in the Admin Page
  * Request Body Expects:
   [
      {"op": "replace", "path": "/question", "value": newQuestion},
      {"op": "replace", "path": "/answers", "value": newAnswers},
      {"op": "replace", "path": "/active", "value": <true or false>}
   ]
  * Returned JSON: The changed Poll object
 * DELETE /poll/:id
   * Deletes the Poll associated with the ID
   * Used in the Admin Pages
   * Returned JSON: The deleted Poll object
 

## Front-end Libraries

This application was built using the React framework.

### [Material UI](https://material-ui.com/)

The following Material UI components are used in this app:
* AppBar
* Backdrop
* Button
* ButtonGroup
* createMuiTheme
* FormControlLabel
* IconButton
* MuiThemeProvider
* Switch
* Table
* TableBody
* TableCell
* TableHead
* TableRow
* TextField
* Toolbar
* Tooltip

### [React-Bootstrap](https://react-bootstrap.github.io/)

The following react-bootstrap components are used:
* Nav
* Tooltip
* OverlayTrigger

### [FontAwesome](https://fontawesome.com/)

Multiple icons from FontAwesome were used throughout this web-app.

## Back-end Libraries

* MongoDB and Mongoose.js were used to create the database
* server.js uses an Express backend
* bcrypt.js was used to hash sensitive data
