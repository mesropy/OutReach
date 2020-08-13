import React from "react";
import './styles.css';
import LocationSetter from "../LocationSetter";
import { Backdrop, Button, IconButton, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faPaperPlane, faPlus } from '@fortawesome/free-solid-svg-icons'

// Component for new message popup
class NewMessagePopup extends React.Component {
    handleSubmit = () => {
        this.props.closePopup();
        this.props.addMessage();
        this.props.removeLocation();
        this.props.removeContent();
    };

    render() {
        const { city } = this.props;

        return(
            <div>
                <Backdrop open={true} onClick={this.props.closePopup}></Backdrop>
                <div className="addMessagePopup">
                    <IconButton id="popup_close_button" onClick={this.props.closePopup}>
                        <FontAwesomeIcon icon={ faTimesCircle } />
                    </IconButton>
                    <h3 className="popupTitle">New Message</h3>

                    <TextField
                        multiline
                        rows={20}
                        placeholder="Share your thoughts here..."
                        fullWidth={true}
                        variant="outlined"
                        name="content"
                        onChange={this.props.handleInput}
                    />
                    <LocationSetter
                        city={ city }
                        handleLocationLeft={ this.props.handleLocationLeft }
                        handleLocationDown={ this.props.handleLocationDown }
                        handleLocationName={ this.props.handleLocationName }
                        removeLocation={ this.props.removeLocation }
                     />
                    <div className="btns">
                        <Button className="postBtn" onClick={this.handleSubmit}>
                            Post
                            <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

// Component for the button that will open the new message pop-up
class MessageAdder extends React.Component {
    constructor() {
        super();
        this.state = {
          showNewMessagePopup: false
        };
    }

    toggle() {
        this.setState({
          showNewMessagePopup: !this.state.showNewMessagePopup
        });
    }

    // we will also need to check if this user is in the city their account is
    // attached to ( they can only add messages to their own city)
    // We will get what city the user is in from a database

    render() {
        const { city, currentUser } = this.props;
        const isLoggedIn = currentUser ? true : false;
        // the user is an admin if the username's first 5 chars are "admin"
        const isAdmin = currentUser ? currentUser.search("admin") === 0 : false;

        // TODO: if there is a currentUser get the current user's city
        // (right now hardcoded to Toronto)
        const userCity = currentUser ? "Toronto" : null

        if (!isLoggedIn) {
          return (
            <div className="add_message_info">
                <Link to="/login">Login</Link> to add a message
            </div>
          );
        } else if (isAdmin) {
          return (
            <div className="add_message_info">
              <Link to="/login">Login </Link>
              to a user account to add a message.
              <br></br>
              (Admins cannot add messages)
            </div>
          );
        } else if (userCity.toLowerCase() !== city.toLowerCase()){
          return (
            <div className="add_message_info">
              To post a message visit <Link to={`/${userCity}`}>your city page.</Link>
            </div>
          );
        } else { // display the button for adding a message
          return (
              <div>
              <Button id="addBtn"
                      variant="outlined"
                      color="primary"
                      onClick={this.toggle.bind(this)}>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                <span id="addBtnText">New Message</span>
              </Button>

                  {this.state.showNewMessagePopup ?
                      <NewMessagePopup
                        closePopup={this.toggle.bind(this)}
                        city={ city }
                        handleInput={ this.props.handleInput }
                        addMessage={ this.props.addMessage }
                        handleLocationLeft={ this.props.handleLocationLeft }
                        handleLocationDown={ this.props.handleLocationDown }
                        handleLocationName={ this.props.handleLocationName }
                        removeContent={ this.props.removeContent }
                        removeLocation={ this.props.removeLocation }
                      />
                      : null
                  }
              </div>
          );
        }
    }
};

export default MessageAdder;
