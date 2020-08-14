import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {getUsers, renderUsers} from './actions/dynamicRouting'
import {checkAdmin} from './actions/checkLogin'
import Home from "./react-components/Home";
import WorldMap from './react-components/WorldMap';
import Register from "./react-components/Register"
import Login from "./react-components/Login"
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
      users: [],
      currentUser: null,
      cities: ["Toronto", "Paris", "Montréal"]
    }
    getUsers.bind(this)();
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
                              (<Register global={this} handleLogin={this.handleLogin.bind(this)} />)}/>
              <Route exact path='/Login' render={() =>
                              (<Login handleLogin={this.handleLogin.bind(this)} />)}/>
              <Route exact path='/admin' render={() =>
                              {return checkAdmin.bind(this, this.state.currentUser)()}}/>
              <Route path='/user/:username' render={(routerProps) => {return renderUsers.bind(this, routerProps)()}} />
            </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
    );
  }
}

export default App;
