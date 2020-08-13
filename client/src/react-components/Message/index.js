import React from "react";
import './styles.css';

import { Backdrop, IconButton } from "@material-ui/core";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toronto_map from "../City/static/toronto_map.png"
import { Link } from "react-router-dom";

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
        const {username, public_account, age, time, date, content, published, location_name,
               pin_left_pos, pin_down_pos} = this.props;

        return (
            <div className="post">
                <div className="post-bar">
                    <p className="post-username">
                        {public_account ? <Link to={"/".concat(this.props.username)}>
                            <strong>{username}</strong>
                        </Link> : <strong>anonymous</strong>}
                        {age !== null ? age.concat(" yrs") : null}
                        {!published ? "  (Pending)" : null}
                    </p>
                    <div className="post-rightBar">
                        { this.props.location_name !== "" ?
                        <button className="pin_button"
                                onClick={ this.toggle.bind(this) }>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </button>
                        : null }
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
