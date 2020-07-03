import React from "react";
import "./styles.css";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import toronto_map from "./../../static/toronto_map.png";

// Component for pin on the map, used by PinPlacer below
class Pin extends React.Component {
    render() {
        return(
            <Button id="setting_pin">
                <FontAwesomeIcon icon={ faMapMarkerAlt } />
            </Button>
        );
    }
}

// Component for placing pin on the map
class PinPlacer extends React.Component {
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
      const { city } = this.props;
      // here we will get the map of the city from a database using
      // the city name 

        return (
            <div>
                <img className="setting_map" src={ toronto_map } onClick={ this.toggle.bind(this) } alt="Map of Toronto" />

                {this.state.show ?
                    <div>
                        <Pin
                            closePopup={this.toggle.bind(this)}
                        />
                            <h5 id="locationName">Location Name</h5>
                    </div>
                    : null
                }
            </div>
        );
    }
};

export default PinPlacer;
