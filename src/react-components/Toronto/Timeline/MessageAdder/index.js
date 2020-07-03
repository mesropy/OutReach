import React from "react";
import './styles.css';
import LocationSetter from "../LocationSetter";
import { Backdrop, Button, IconButton, TextField } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faPaperPlane, faPlus } from '@fortawesome/free-solid-svg-icons'

// Component for new message popup
class NewMessagePopup extends React.Component {
    handleSubmit = () => {
        this.props.closePopup();
        this.props.addMessage();
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
                        className="TextEntry"
                        multiline
                        rows={12}
                        placeholder="Share your thoughts here..."
                        fullWidth={true}
                        variant="outlined"
                        name="content"
                        onChange={this.props.handleInput}
                    />

                    <div className="btns">
                        <LocationSetter city={ city } />
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

    render() {
        const { city } = this.props;
        return (
            <div>
                <Button id="addBtn"
                        variant="outlined"
                        color="primary"
                        onClick={this.toggle.bind(this)}>
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                  <span id="addBtnText" >New Message</span>
                </Button>

                {this.state.showNewMessagePopup ?
                    <NewMessagePopup
                      closePopup={this.toggle.bind(this)}
                      city={ city }
                      handleInput={ this.props.handleInput }
                      addMessage={ this.props.addMessage }
                    />
                    : null
                }
            </div>
        );
    }
};

export default MessageAdder;
