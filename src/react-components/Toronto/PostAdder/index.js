import React from "react";
import { Button, TextField } from "@material-ui/core";
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
            <div className="popupWindow">
                <Button onClick={this.props.closePopup}>Cancel</Button>
                <h3 className="popupTitle">{this.props.title}</h3>

                <TextField
                  className="TextEntry"
                  multiline
                  rows={12}
                  defaultValue="Share your thoughts"
                  fullWidth={true}
                  variant="outlined"
                  onChange={handleInputFunc}
                />
                <div className="btns">
                    <Button variant="outlined" onClick={this.props.closePopup}>Set Location</Button>
                    {/* <select name="city" id="city">
                        <option disabled value="default">select a city</option>
                        <option value="Toronto">Toronto</option>
                    </select> */}
                    <Button className="postBtn" variant="outlined" onClick={this.handleSubmit}>Post</Button>
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
                <Button id="addBtn" variant="contained" onClick={this.toggle.bind(this)}>New Message</Button>

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