import React from "react";

import MessageAdder from "./MessageAdder";
import MessageList from "./MessageList";
import { addMessage } from "./../../../actions/addMessage";

import "./styles.css";

class Timeline extends React.Component {

  // note: the content, locationName, pinLeftPos, and pinDownPos states are for input

  constructor(props) {
      super(props)
      this.state = {
          content: "",
          locationName: "",
          pinLeftPos: "",
          pinDownPos: "",
          messages: this.props.messages
      }
  }

  handleInput = event => {
      const value = event.target.value;
      const name = event.target.name;
      this.setState({
          [name]: value
      });
  };

  removeContent = () => {
    this.setState({
      content: ""
    });
  };

  handleLocationLeft = (left) => {
    this.setState({
      pinLeftPos: left
    });
  };

  handleLocationDown = (down) => {
    this.setState({
      pinDownPos: down
    });
  };

  handleLocationName = (name) => {
    this.setState({
      locationName: name
    });
  };

  removeLocation = () => {
    this.setState({
      locationName: "",
      pinLeftPos: "",
      pinDownPos: ""
    });
  };

  render(){
    const { city, currentUser, currentUserId } = this.props;

    return(
      <div id="timeline">
        <MessageAdder
            city={ city }
            handleInput={ this.handleInput }
            addMessage={ () => addMessage(this, currentUser, currentUserId, city) }
            currentUser={ currentUser }
            currentUserId={ currentUserId }
            handleLocationLeft={ this.handleLocationLeft }
            handleLocationDown={ this.handleLocationDown }
            handleLocationName={ this.handleLocationName }
            removeContent={ this.removeContent }
            removeLocation={ this.removeLocation }
        />
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default Timeline;
