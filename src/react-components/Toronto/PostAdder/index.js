import React from "react";
import { Backdrop, Button, TextField } from "@material-ui/core";
import './styles.css';

// Component for text entry popup, used by PostAdder below
class Popup extends React.Component {
    handleSubmit = () => {
        this.props.closePopup();
        this.props.addPostFunc();
        this.props.cleanFunc();
    };

    render() {
        const {handleInputFunc, addPostFunc, cleanFunc} = this.props;

        return(
            <div>
                <Backdrop open={true} onClick={this.props.closePopup}></Backdrop>
                <div className="popupWindow">
                    <Button onClick={this.props.closePopup}>Cancel</Button>
                    <h3 className="popupTitle">{this.props.title}</h3>

                    <TextField
                    className="TextEntry"
                    multiline
                    rows={12}
                    defaultValue="Share your thoughts here..."
                    fullWidth={true}
                    variant="outlined"
                    onChange={handleInputFunc}
                    />

                    <div className="btns">
                        <Button className="locationBtn" variant="outlined" onClick={this.props.closePopup}>Set Location</Button>
                        <Button className="postBtn" variant="outlined" onClick={this.handleSubmit}>Post</Button>
                    </div>
                </div>
            </div>
        );
    }
}

// Component for the button to open new message popup
class PostAdder extends React.Component {
    constructor() {
        super();
        this.state = {
          show: false
        };
    }

    toggle() {
        this.setState({
          show: !this.state.show
        });
    }

    render() {
        const {handleInputFunc, addPostFunc, cleanFunc} = this.props;
        return (
            <div>
                <Button id="addBtn"
                        color="primary"
                        onClick={this.toggle.bind(this)}>New Message</Button>

                {this.state.show ?
                    <Popup
                      title="New Message"
                      closePopup={this.toggle.bind(this)}
                      handleInputFunc={handleInputFunc}
                      addPostFunc={addPostFunc}
                      cleanFunc={cleanFunc}
                    />
                    : null
                }
            </div>
        );
    }
};

export default PostAdder;