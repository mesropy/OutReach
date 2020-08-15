import React from "react";
import './styles.css';
import { Backdrop, Button, IconButton, Input, InputAdornment, Grid, Slider } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import toronto_map from "./../../static/toronto_map.png";
import montreal_map from "./../../static/montreal_map.png";
import paris_map from "./../../static/paris_map.png";

// Component for location setting popup, used by LocationSetter below
class LocationSettingPopup extends React.Component {

  state ={
    pinLeftPos: "0",
    pinDownPos: "0",
    locationName: ""
  }

  handleSliderLeftChange = (event, newValue) => {
  this.setState({
    pinLeftPos: newValue
    });
    this.props.handleLocationLeft(newValue);
  };

  handleSliderDownChange = (event, newValue) => {
  this.setState({
    pinDownPos: newValue
    });
    this.props.handleLocationDown(newValue);
  };

  handlePosLeftChange = (event) => {
    this.setState({
      pinLeftPos: Number(event.target.value)
    });
    this.props.handleLocationLeft(event.target.value);
  };

  handlePosDownChange = (event) => {
    this.setState({
      pinDownPos: Number(event.target.value)
    });
    this.props.handleLocationDown(event.target.value);
  };

  handleTextInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      locationName: value
    });
    this.props.handleLocationName(value);
  };

  handleClose = () => {
    this.props.closePopup();
    this.props.removeLocation();
  }

    render() {
      const { city } = this.props;
      // (^ this is commented out now to avoid warnings)
      // here we will get the map of the city from a database using the city name
      // (now it will always show the Toronto map)
      let map = toronto_map;
      switch (this.props.city) {
        case "MONTRÉAL":
          map = montreal_map;
          break;
        case "PARIS":
          map = paris_map;
          break;
        default:
      }

        return(
            <div>
                <Backdrop open={ true } onClick={ this.props.closePopup }></Backdrop>
                <div className="setLocationPopup">


                    <IconButton id="popup_close_button" onClick={ this.handleClose }>
                        <FontAwesomeIcon icon={ faTimesCircle } />
                    </IconButton>

                    <div className="city_map_container" >
                      <div id="pinOnMap" style={{left: `${this.state.pinLeftPos}%`,
                                                bottom: `${this.state.pinDownPos}%`}}>
                        <FontAwesomeIcon icon={ faMapMarkerAlt }/>
                      </div>
                      <img className="loc_setting_city_map"
                           onClick={ this.handleMapClick }
                           src={ map }
                           alt="city map"/>
                    </div>

                    <Grid className="position_sliders" container spacing={2} alignItems="center">
                      <Grid item xs>
                        <Slider
                          value={ Number(this.state.pinLeftPos) }
                          onChange={ this.handleSliderLeftChange }
                          aria-labelledby="input-slider"
                        />
                      </Grid>
                      <Grid item>
                        <Input
                          value={ Number(this.state.pinLeftPos) }
                          margin="dense"
                          onChange={this.handlePosLeftChange}
                          inputProps={{
                            step: 1,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                          }}
                        />
                      </Grid>
                      <Grid item xs>
                        <Slider
                          value={ Number(this.state.pinDownPos) }
                          onChange={ this.handleSliderDownChange }
                          aria-labelledby="input-slider"
                        />
                      </Grid>
                      <Grid item>
                        <Input
                          value={ Number(this.state.pinDownPos) }
                          margin="dense"
                          onChange={this.handlePosDownChange}
                          inputProps={{
                            step: 1,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                          }}
                        />
                      </Grid>
                    </Grid>

                    <div id="locationTextFieldContainer">
                      <Input
                          fullWidth
                          startAdornment={
                            <InputAdornment position="start">
                              <FontAwesomeIcon icon={ faMapMarkerAlt } />
                            </InputAdornment>
                          }
                          placeholder="Write a location name..."
                          onChange={ this.handleTextInputChange }
                           />
                    </div>


                    <Button id="doneButton"
                            onClick={ this.props.closePopup }
                            disabled={ this.state.locationName === ""}>
                        <h5>Done</h5>
                        <FontAwesomeIcon id="checkmark" icon={ faCheck }></FontAwesomeIcon>
                    </Button>
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
                        city={this.props.city}
                        closePopup={this.toggle.bind(this)}
                        handleLocationLeft={ this.props.handleLocationLeft }
                        handleLocationDown={ this.props.handleLocationDown }
                        handleLocationName={ this.props.handleLocationName }
                        removeLocation={ this.props.removeLocation }
                    />
                    : null
                }
            </div>
        );
    }
};

export default LocationSetter;
