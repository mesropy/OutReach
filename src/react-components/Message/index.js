import React from "react";
import './styles.css';

import { Backdrop, IconButton } from "@material-ui/core";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toronto_map from "./../Toronto/static/toronto_map.png";

// Component for the location popup
class LocationPopup extends React.Component {
    render() {
      const { city_map, location_name, pin_left_pos, pin_down_pos } = this.props;
        return(
            <div>
                <Backdrop open={true} onClick={this.props.closePopup}></Backdrop>
                <div className="locationPopup">
                    <div id="location_popup_title">
                      <FontAwesomeIcon icon={ faMapMarkerAlt } />
                      <h5> { location_name } </h5>
                    </div>
                    <IconButton id="popup_close_button" onClick={this.props.closePopup}>
                      <FontAwesomeIcon icon={ faTimesCircle } />
                    </IconButton>
                    <div id="map_container" >
                    {/* TODO: remove inline CSS? or is this allowed? */}
                      <div style={{left: pin_left_pos, bottom: pin_down_pos, position: "absolute"}}>
                        <FontAwesomeIcon icon={ faMapMarkerAlt }/>
                      </div>
                      <img id="city_map" src={ city_map } alt="city map"/>
                    </div>
                </div>
            </div>
      );
    }
}

// componenet for the message
class Message extends React.Component {
  constructor() {
      super();
      this.state = {
          showLocationPopup: false
      };
  }

  toggle() {
      this.setState({
          showLocationPopup: !this.state.showLocationPopup
      });
  }

    render() {
        // will always display current time
        // TODO: set this time when a new message is added (in MessageAdder)
        const today = new Date();
        const {username="user",
               age="20",
               time=  today.getHours() + ":" + ('0' + today.getMinutes()).slice(-2),
               date= today.toLocaleString('default', { month: 'short' }) + " " +
                     today.getDate(),
               content,
               location_name="UofT",
               pin_left_pos="58%",
               pin_down_pos="42%"} = this.props;

        return (
            <div className="post">
                <div className="post-bar">
                    <p className="post-username">
                        <strong>{username}</strong>
                        {age}
                    </p>
                    <div className="post-rightBar">
                        <button className="pin_button"
                                onClick={ this.toggle.bind(this) }>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </button>
                        { time.concat(" · ", date) }
                    </div>
                </div>

                <div className="postContent">
                    <p>{content}</p>
                </div>


                { this.state.showLocationPopup ?
                <LocationPopup
                    location_name={ location_name }
                    city_map={ toronto_map }
                    pin_left_pos={ pin_left_pos }
                    pin_down_pos={ pin_down_pos }
                    closePopup={ this.toggle.bind(this) } /> : null }

            </div>
        );
    }
}

export default Message;
