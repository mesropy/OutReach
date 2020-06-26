import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@material-ui/core";

import "./styles.css";

// either displays login and sign-up buttons,
// or username and logout buttons
// (depending on whether the user is logged in or not)
class AccountNavigation extends React.Component{
  state = {
    loggedIn: false
  }

  render () {
    // get username prop
    /*const { username } = this.props*/

    return(
      <ButtonGroup className="account_nav"
                   variant= "outlined"
                   color="primary" >
         {/* TODO: add path to login page */}
          <Button component= { Link } to={"/Admin"}
                  className="account_button">
                  Login
          </Button>
          <Button component= { Link } to={"./../Register"}
                  className="account_button">
                  Sign-Up
          </Button>
      </ButtonGroup>
    );
  }
}

export default AccountNavigation;
