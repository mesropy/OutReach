import React from "react";
import { Button, TextField } from "@material-ui/core";
import './styles.css';

class Popup extends React.Component {
    handleSubmit = () => {
        this.props.closePopup();
        this.props.addPostFunc();
    };

    render() {
        const {handleInputFunc, addPostFunc} = this.props;
        
        return(
            <div className="popupWindow">
                <h3>{this.props.title}</h3>

                <TextField 
                  className="TextEntry"
                  multiline
                  rows={12}
                  defaultValue="Share your thoughts"
                  fullWidth={true}
                  variant="outlined"
                  onChange={handleInputFunc}
                />

                <Button variant="outlined" onClick={this.props.closePopup}>Cancel</Button>
                <Button variant="outlined" onClick={this.props.closePopup}>Set Location</Button>
                <Button variant="outlined" onClick={this.handleSubmit}>Post</Button>
            </div>
        );
    }
}

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
        const {handleInputFunc, addPostFunc} = this.props;
        return (
            <div>
                <Button id="addBtn" variant="contained" onClick={this.toggle.bind(this)}>ADD</Button>

                {this.state.show ? 
                    <Popup
                      title="New Message"
                      closePopup={this.toggle.bind(this)}
                      handleInputFunc={handleInputFunc}
                      addPostFunc={addPostFunc}
                    />
                    : null
                }
            </div>
        );
    }
};

export default PostAdder;