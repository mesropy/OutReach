import React from "react";
import { Button, TextField } from "@material-ui/core";
import './styles.css';

class Popup extends React.Component {
  render() {
    return(
      <div className="popupWindow">
        <h3>{this.props.title}</h3>

        <TextField 
          className="TextEntry"
          // id="outlined-multiline-static"
          // label="Multiline"
          multiline
          rows={12}
          defaultValue="Share your thoughts"
          fullWidth={true}
          variant="outlined"
          // onChange=
        />

        <Button variant="contained" onClick={this.props.closePopup}>Cancel</Button>
        <Button variant="contained" onClick={this.props.closePopup}>Set Location</Button>
        <Button variant="contained" onClick={this.props.closePopup}>Post</Button>
      </div>
    );
  }
}

class PopupButton extends React.Component {
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
    return (
      <div>
        <Button id="addBtn" variant="contained" onClick={this.toggle.bind(this)}>ADD</Button>

        {this.state.show ? 
          <Popup
            title="New Message"
            closePopup={this.toggle.bind(this)}
          />
          : null
        }

      </div>
    );
  }
};

export default PopupButton;