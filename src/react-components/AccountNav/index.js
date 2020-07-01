import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@material-ui/core";

import "./styles.css";

// either displays login and sign-up buttons,
// or username and logout buttons
// (depending on whether the user is logged in or not)
class AccountNav extends React.Component{
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    let username = "";
    if (this.props.userLoggedIn) {
      username = "user"
    }
    else if (this.props.adminLoggedIn) {
      username = "admin"
    }
    this.state = {
      userLoggedIn: this.props.userLoggedIn,
      adminLoggedIn: this.props.adminLoggedIn,
      username: username
    }
  }

  handleLogout() {
    this.setState({
      userLoggedIn: false,
      adminLoggedIn: false
    });
  }

  render () {
    /* TODO: Add an if statement for each adminLoggedIn/userLoggedIn and link to each profile page */
    if (this.state.userLoggedIn || this.state.adminLoggedIn) {
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
              <Button component= { Link } to={"./../Login"}
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
}

export default AccountNav;
