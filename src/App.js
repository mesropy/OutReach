import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './react-components/Home';
import Register from "./react-components/Register"
import Admin from "./react-components/Admin"
import Toronto from "./react-components/Toronto"
import User from "./react-components/User"
import OtherUser from "./react-components/OtherUser"

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

// TODO: pass these into pages that need them
/*
const state = {
  isLoggedIn: false,
  isAdmin: false,
  username: "username"
} */

class App extends React.Component {

  render() {
    return (
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
              { /* Each Route below shows a different component depending on the exact path in the URL  */ }
              <Route exact path='/' render={() =>
                              (<Home />)}/>
              <Route exact path='/Register' render={() =>
                              (<Register />)}/>
              <Route exact path='/Admin' render={() =>
                              (<Admin />)}/>
              <Route exact path='/User' render={() =>
                              (<User />)} />
              <Route exact path='/OtherUser' render={() =>
                              (<OtherUser />)} />
              <Route exact path='/Toronto' render={() =>
                              (<Toronto />)}/>
            </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
    );
  }
}

export default App;
