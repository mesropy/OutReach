import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserCog } from '@fortawesome/free-solid-svg-icons'
import { logout } from '../../actions/logout.js'

import "./styles.css";

// either displays login and sign-up buttons,
// or username and logout buttons
// (depending on whether the user is logged in or not)
class AccountNav extends React.Component{

  render () {
    if (this.props.currentUser) {
      const isAdmin = this.props.currentUser.startsWith("admin");
      return (
        <div className="account_nav">
          <Button component= { Link } to={ isAdmin ? "/admin" : "/user/".concat(this.props.currentUser)}
                  className="username_button"
                  disableRipple
                  variant="text">
          <FontAwesomeIcon icon={ isAdmin ? faUserCog : faUser}></FontAwesomeIcon>
          <div className="divider"/>
          { this.props.currentUser }
          </Button>
          <div className="divider"/>
          <Button onClick={ () => logout(this.props.handleLogout) }
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
