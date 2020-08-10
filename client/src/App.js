import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from "./react-components/Home";
import WorldMap from './react-components/WorldMap';
import Register from "./react-components/Register"
import Login from "./react-components/Login"
import Admin from "./react-components/Admin"
import City from "./react-components/City"
import User from "./react-components/User"

import { readCookie } from "./actions/readCookie.js";

// customize theme
import { MuiThemeProvider, createMuiTheme  } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#147E7D",
    },
    secondary: {
      main: "#C73E4E",
    },
  },
});

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null,
      cities: ["Toronto", "Paris", "Montréal"]
    }
    readCookie(this.handleLogin.bind(this))
  }

  handleLogout() {
    this.setState({
      currentUser: null
    });
  }

  handleLogin(username) {
    this.setState({
      currentUser: username
    });
  }

  render() {
    return (
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
              { /* Each Route below shows a different component depending on the exact path in the URL  */ }
              <Route exact path='/' render={() =>
                              (<Home
                                currentUser={this.state.currentUser}
                                handleLogout={this.handleLogout.bind(this)}
                              />)}/>
              <Route exact path='/WorldMap' render={() =>
                              (<WorldMap
                                currentUser={this.state.currentUser}
                                handleLogout={this.handleLogout.bind(this)}
                              />)}/>
              {/* TODO: create these city routes based on the list of cities state */}
              <Route exact path='/Toronto' render={() =>
                              (<City
                                currentUser={this.state.currentUser}
                                handleLogout={this.handleLogout.bind(this)}
                                city="TORONTO"
                              />)}/>
              <Route exact path='/Paris' render={() =>
                              (<City
                                currentUser={this.state.currentUser}
                                handleLogout={this.handleLogout.bind(this)}
                                city="PARIS"
                              />)}/>
              <Route exact path='/Montréal' render={() =>
                              (<City
                                currentUser={this.state.currentUser}
                                handleLogout={this.handleLogout.bind(this)}
                                city="MONTRÉAL"
                              />)}/>
              <Route exact path='/Register' render={() =>
                              (<Register handleLogin={this.handleLogin.bind(this)} />)}/>
              <Route exact path='/Login' render={() =>
                              (<Login handleLogin={this.handleLogin.bind(this)} />)}/>
              <Route exact path='/admin' render={() =>
                              (<Admin handleLogout={this.handleLogout.bind(this)} />)}/>
              {/* TODO: add routes for every user with dynamic routing */}
              <Route exact path='/user' render={() =>
                              (<User userPage={"user"}
                                     currentUser={this.state.currentUser}
                                     handleLogout={this.handleLogout.bind(this)} />)} />
              <Route exact path='/Ryan' render={() =>
                              (<User userPage={"Ryan"}
                                     currentUser={this.state.currentUser}
                                     handleLogout={this.handleLogout.bind(this)} />)} />

            </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
    );
  }
}

export default App;
