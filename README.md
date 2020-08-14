# OutReach by team26

Website Link: https://outreachapp.herokuapp.com/

## Getting Started

This web-application was built using React. Launch the application by typing the following commands in the terminal:
```
git clone https://github.com/csc309-summer-2020/team26
cd team26
npm install
npm start
```
## Non-Logged Users
On launch, you are able to browse messages by navigating to city pages using the pins on the world map.  

For now, we have designed webpages for three cities:
* Toronto
* Montréal
* Paris

Each city page includes a Safety Information panel which can be accessed by clicking the "i" symbol.  

Data regarding the COVID-19 status is shown in a panel (this data will be pulled from an external API).  

The Poll Question will later be implemented using an API.  

Messages left by other users are displayed in the center. You can click on the pin icon to view the location of each message on this city map.  

Note: A non-logged user cannot add their own messages.

## Users

### Login Credentials for User

You can click the "Login" button and use the following credentials to login as a user:
* username: user
* password: user

You can also click the "SignUp" button and create your own user profile.  

Note: The new registered user will not be stored on the website. We expect to retrieve/add to a list of users using a local database.  

### Instructions for User

Once you become a user, you can add your own messages to any of the cities.  

You can also access your personal profile page by clicking on your username in the top-right corner.  

This page lets you access a list of all the messages you have added and modify your personal settings.  

Note: You can access other user personal profiles by clicking on the username in their messages.  

## Admin

### Login Credentials for Admin

An administrator has access to Admin Control. Login using the following credentials to become an admin:
* username: admin
* password: admin

### Instructions for Admin

Click on the "admin" name in the top-right corner to access the admin profile.  

The admin control displays a list of all users alongside an option for deletion.  

The admin control also displays a list of all messages that need to be reviewed before being published.  

An admin can delete any published messages that were mistakenly added.  

## Libraries

### [Material UI](https://material-ui.com/)

The following Material UI components are used in this app:
* AppBar
* Backdrop
* Button
* ButtonGroup
* createMuiTheme
* IconButton
* MuiThemeProvider
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
