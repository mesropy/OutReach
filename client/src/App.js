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
      isLoggedIn: true,
      isAdmin: false,
      username: "user"
    }
  }

  handleLogout() {
    this.setState({
      isLoggedIn: false,
      isAdmin: false,
      username: "user"
    });
  }

  handleLogin(username) {
    let admin = false;
    if (username === "admin"){
       admin = true;
     }

    this.setState({
      isLoggedIn: true,
      isAdmin: admin,
      username: username
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
                                isLoggedIn={this.state.isLoggedIn}
                                isAdmin={this.state.isAdmin}
                                username={this.state.username}
                                handleLogout={this.handleLogout.bind(this)}
                              />)}/>
              <Route exact path='/WorldMap' render={() =>
                              (<WorldMap
                                isLoggedIn={this.state.isLoggedIn}
                                isAdmin={this.state.isAdmin}
                                username={this.state.username}
                                handleLogout={this.handleLogout.bind(this)}
                              />)}/>
              <Route exact path='/Toronto' render={() =>
                              (<City
                                isLoggedIn={this.state.isLoggedIn}
                                isAdmin={this.state.isAdmin}
                                username={this.state.username}
                                handleLogout={this.handleLogout.bind(this)}
                                city="TORONTO"
                              />)}/>
              <Route exact path='/Paris' render={() =>
                              (<City
                                isLoggedIn={this.state.isLoggedIn}
                                isAdmin={this.state.isAdmin}
                                username={this.state.username}
                                handleLogout={this.handleLogout.bind(this)}
                                city="PARIS"
                              />)}/>
              <Route exact path='/Montréal' render={() =>
                              (<City
                                isLoggedIn={this.state.isLoggedIn}
                                isAdmin={this.state.isAdmin}
                                username={this.state.username}
                                handleLogout={this.handleLogout.bind(this)}
                                city="MONTRÉAL"
                              />)}/>
              <Route exact path='/Register' render={() =>
                              (<Register handleLogin={this.handleLogin.bind(this)} />)}/>
              <Route exact path='/Login' render={() =>
                              (<Login handleLogin={this.handleLogin.bind(this)} />)}/>
              <Route exact path='/admin' render={() =>
                              (<Admin handleLogout={this.handleLogout.bind(this)} />)}/>
              <Route exact path='/user' render={() =>
                              (<User username={this.state.username}
                                     handleLogout={this.handleLogout.bind(this)} />)} />
              <Route exact path='/Ryan' render={() =>
                              (<User username="Ryan"
                                     handleLogout={this.handleLogout.bind(this)} />)} />
              {/* and can make more user pages like this ^*/}

            </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
    );
  }
}

export default App;
