import React from "react";

import MessageAdder from "./MessageAdder";
import MessageList from "./MessageList";
import { addMessage } from "./../../../actions/addMessage";

import "./styles.css";

class Timeline extends React.Component {

  // we will get the messages for this city from the database using the name of the city.
  // The messages state contains some hard-coded messages

  // note: the content, locationName, pinLeftPos, and pinDownPos states are for input
  state = {
    content: "",
    locationName: "",
    pinLeftPos: "",
    pinDownPos: "",
    messages: [
      {username: "user1", age: "20", time: "8:30am", date: "Jul 8", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget maximus massa. Vestibulum hendrerit nec urna eu elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vehicula turpis vitae eros convallis, suscipit lobortis neque vestibulum. Morbi ac augue at nisl porttitor varius. Suspendisse elementum tincidunt ullamcorper. Fusce mi arcu, vehicula in facilisis sit amet, eleifend ut sem. Aenean volutpat feugiat nulla vel egestas.", locationName: "UofT", pinLeftPos: "58%", pinDownPos: "42%"},
      {username: "user2", age: "22", time: "9:00am", date: "Jul 9", content: "Suspendisse eget maximus massa. Vestibulum hendrerit nec urna eu elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vehicula turpis vitae eros convallis, suscipit lobortis neque vestibulum. Morbi ac augue at nisl porttitor varius. Suspendisse elementum tincidunt ullamcorper. Fusce mi arcu, vehicula in facilisis sit amet, eleifend ut sem. Aenean volutpat feugiat nulla vel egestas.", locationName: "UofT", pinLeftPos: "58%", pinDownPos: "42%"}
    ]
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
    const { city, currentUser} = this.props;
    const isLoggedIn = currentUser ? true : false
    const isAdmin = currentUser === "admin" ? true : false

    return(
      <div id="timeline">
        <MessageAdder
            city={ city }
            handleInput={ this.handleInput }
            addMessage={ () => addMessage(this, currentUser) }
            isLoggedIn={ isLoggedIn }
            isAdmin={ isAdmin }
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
