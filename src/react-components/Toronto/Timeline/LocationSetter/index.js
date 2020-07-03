import React from "react";
import './styles.css';
import { Backdrop, Button, IconButton, Input, InputAdornment, Grid, Slider } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import toronto_map from "./../../static/toronto_map.png";

// Component for location setting popup, used by LocationSetter below
class LocationSettingPopup extends React.Component {

  state ={
    pinLeftPos: "0",
    pinDownPos: "0",
  }

  handleSliderLeftChange = (event, newValue) => {
  this.setState({
    pinLeftPos: newValue
    });
  };

  handleSliderDownChange = (event, newValue) => {
  this.setState({
    pinDownPos: newValue
    });
  };

  handleInputChange = (event) => {
    const name = this.state.name;
    this.setState({
      [name]: event.target.value === '' ? '' : Number(event.target.value)
    });
};

    render() {
      // const { city } = this.props;
      // (^ this is commented out now to avoid warnings)
      // here we will get the map of the city from a database using the city name
      // (now it will always show the Toronto map)

        return(
            <div>
                <Backdrop open={ true } onClick={ this.props.closePopup }></Backdrop>
                <div className="setLocationPopup">


                    <IconButton id="popup_close_button" onClick={ this.props.closePopup }>
                        <FontAwesomeIcon icon={ faTimesCircle } />
                    </IconButton>

                    <div className="city_map_container" >
                      <div id="pinOnMap" style={{left: `${this.state.pinLeftPos}%`,
                                                bottom: `${this.state.pinDownPos}%`}}>
                        <FontAwesomeIcon icon={ faMapMarkerAlt }/>
                      </div>
                      <img className="loc_setting_city_map"
                           onClick={ this.handleMapClick }
                           src={ toronto_map }
                           alt="city map"/>
                    </div>

                    <Grid container spacing={2} alignItems="center">
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
                          onChange={this.handleInputChange}
                          inputProps={{
                            step: 10,
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
                          onChange={this.handleInputChange}
                          inputProps={{
                            step: 10,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                          <InputAdornment position="start">
                            <FontAwesomeIcon icon={ faMapMarkerAlt } />
                          </InputAdornment>
                        }
                        placeholder="Write a location name..."
                    />


                    <Button id="done" onClick={ this.props.closePopup }>
                        <h5 id="btnText">Done</h5>
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
                        closePopup={this.toggle.bind(this)}
                    />
                    : null
                }
            </div>
        );
    }
};

export default LocationSetter;
