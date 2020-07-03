import React from "react";
import './styles.css';
import { Backdrop, Button, IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faCheck, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import PinPlacer from "../PinPlacer";

// Component for location setting popup, used by LocationSetter below
class LocationSettingPopup extends React.Component {
    render() {
      const { city } = this.props;

        return(
            <div>
                <Backdrop open={ true } onClick={ this.props.closePopup }></Backdrop>
                <div className="setLocationPopup">
                    <h4 className="locationTitle">Pick a point on the map...</h4>
                    <IconButton id="popup_close_button" onClick={ this.props.closePopup }>
                        <FontAwesomeIcon icon={ faTimesCircle } />
                    </IconButton>
                    <PinPlacer city={ city }/>
                    <div className="bottomBar">
                        <FontAwesomeIcon id="bottomPin" icon={ faMapMarkerAlt } />
                        <Button id="done" onClick={ this.props.closePopup }>
                            <h5 id="btnText">Done</h5>
                            <FontAwesomeIcon id="checkmark" icon={ faCheck }></FontAwesomeIcon>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

// Component for the button to open location setter
class LocationSetter extends React.Component {
    constructor() {
        super();
        this.state = {
          show: false,
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
                <Button
                    onClick={ this.toggle.bind(this) }
                    className="locationBtn">
                    <FontAwesomeIcon icon={ faMapMarkerAlt } />
                    Set Location
                </Button>
                {this.state.show ?
                    <LocationSettingPopup
                        closePopup={this.toggle.bind(this)}
                    />
                    : null
                }
            </div>
        );
    }
};

export default LocationSetter;
