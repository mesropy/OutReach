import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@material-ui/core";

import "./styles.css";

// either displays login and sign-up buttons,
// or username and logout buttons
// (depending on whether the user is logged in or not)
class AccountNavigation extends React.Component{
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    // TODO: get these from App.js as props
    this.state = {
      isLoggedIn: true,
      isAdmin: false,
      username: "username"
    }
  }

  handleLogout() {
    this.setState({
      isLoggedIn: false
    });
  }

  handleLogin(){
    this.setState({
      isLoggedIn: true
    });
  }

  render () {
    const renderButtons = () => {
      if (this.state.isLoggedIn){
        return (
          <div className="account_nav">
            {/* TODO: add path to account */}
            <Button component= { Link } to={"/Admin"}
                    className="username_button"
                    disableRipple
                    variant="text">
              {/* TODO: add profile icon */}
              { this.state.username }
            <div className="divider"/>
            </Button>
            {/* TODO: add onclick function that logs out user */}
            <Button onClick={ this.handleLogout }
                    className="account_button"
                    variant="outlined"
                    color="primary">
              Logout
            </Button>
          </div>
        );
      } else {
        return (
          <ButtonGroup className="account_nav"
                       variant= "outlined"
                       color="primary" >
             {/* TODO: add path to login page */}
              <Button onClick={ this.handleLogin }
                      className="account_button">
                      login
              </Button>
              <Button component= { Link } to={"./../Register"}
                      className="account_button">
                      sign-up
              </Button>
          </ButtonGroup>
        );
      }
    }

    return renderButtons();
  }
}

export default AccountNavigation;
