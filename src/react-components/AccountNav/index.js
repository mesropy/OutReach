import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserCog } from '@fortawesome/free-solid-svg-icons'

import "./styles.css";

// either displays login and sign-up buttons,
// or username and logout buttons
// (depending on whether the user is logged in or not)
class AccountNav extends React.Component{

  render () {
    if (this.props.isLoggedIn) {
      return (
        <div className="account_nav">
          <Button component= { Link } to={"/".concat(this.props.username)}
                  className="username_button"
                  disableRipple
                  variant="text">
          <FontAwesomeIcon icon={ this.props.isAdmin ? faUserCog : faUser}></FontAwesomeIcon>
          <div className="divider"/>
          { this.props.username }
          </Button>
          <div className="divider"/>
          <Button onClick={ this.props.handleLogout }
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
