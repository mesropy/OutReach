import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './react-components/Home';
import Register from "./react-components/Register"
import Login from "./react-components/Login"
import Admin from "./react-components/Admin"
import Toronto from "./react-components/Toronto"

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
                              (<Home 
                                userLoggedIn={false}
                                adminLoggedIn={false}
                              />)}/>
              <Route exact path='/U' render={() =>
                              (<Home 
                                userLoggedIn={true}
                                adminLoggedIn={false}
                              />)}/>
              <Route exact path='/A' render={() =>
                              (<Home 
                                userLoggedIn={false}
                                adminLoggedIn={true}
                              />)}/>
              <Route exact path='/Register' render={() =>
                              (<Register />)}/>
              <Route exact path='/Login' render={() =>
                              (<Login />)}/>               
              <Route exact path='/Admin' render={() =>
                              (<Admin />)}/>
              <Route exact path='/Toronto' render={() =>
                              (<Toronto 
                                userLoggedIn={false}
                                adminLoggedIn={false}
                              />)}/>
              <Route exact path='/U/Toronto' render={() =>
                              (<Toronto 
                                userLoggedIn={true}
                                adminLoggedIn={false}
                              />)}/>
              <Route exact path='/A/Toronto' render={() =>
                              (<Toronto 
                                userLoggedIn={false}
                                adminLoggedIn={true}
                              />)}/>
            </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
    );
  }
}

export default App;
