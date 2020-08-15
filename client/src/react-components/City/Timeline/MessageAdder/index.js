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
          showNewMessagePopup: false,
          userCity: null,
          inOwnCity: null
        };
    }

    toggle() {
        this.setState({
          showNewMessagePopup: !this.state.showNewMessagePopup
        });
    }

    render() {
        const { city, currentUser, currentUserId } = this.props;
        const isLoggedIn = currentUserId ? true : false;
        // the user is an admin if the username's first 5 chars are "admin"
        const isAdmin = currentUser ? currentUser.startsWith("admin") : false;

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
        } else {
            // get the logged in user's data if we don't already have it
            if (!this.state.userCity){
              const url = "/users/".concat(currentUserId)
              fetch(url)
                  .then(function (res) {
                      if (res.status === 200) {
                          return res.json()
                      }
                  })
                  .then(json => {
                      if (json !== undefined) {
                          // get the user's city, and update state
                          this.setState({
                            userCity: json.user.city
                          })
                          this.setState({
                            inOwnCity: this.state.userCity.toLowerCase() === city.toLowerCase()
                          })
                          return;
                      }
                  })
                  .catch(error => {
                      console.log(error)
                  })
            }

            return (
              <div>
              {!this.state.userCity ? null :
                (!this.state.inOwnCity ?
                  <div className="add_message_info">
                    To post a message visit <a href={`/${this.state.userCity}`}>your city page.</a>
                  </div>
                  :
                  (<div>
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
                              : null}

                      </div>)
                    )
                    }
                  </div>
                )
          }
    }
};

export default MessageAdder;
