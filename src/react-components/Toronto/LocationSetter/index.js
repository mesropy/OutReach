import React from "react";
import './styles.css';
import { Backdrop, Button, IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faCheck, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


// Component for text entry popup, used by PostAdder below
class LocationSettingPopup extends React.Component {
    handleSubmit = () => {
        this.props.closePopup();
    };

    render() {
        const {handleInputFunc} = this.props;

        return(
            <div>
                <Backdrop open={true} onClick={this.props.closePopup}></Backdrop>
                <div className="popupWindow">
                    <h4 className="locationTitle">Pick a point on the map...</h4>

                    <IconButton className="closeBtn" onClick={this.props.closePopup}>
                        <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
                    </IconButton>

                    <img src="" alt=""/>

                    <div className="btns">
                        <Button onClick={this.props.closePopup}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            Set Location
                        </Button>
                        <Button onClick={this.handleSubmit}>
                            Done
                            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

// Component for the button to open new message popup
class LocationSetter extends React.Component {
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
        const {handleInputFunc} = this.props;
        return (
            <div>
                <Button
                    onClick={this.toggle.bind(this)}
                    className="locationBtn">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    Set Location
                </Button>

                {this.state.show ?
                    <LocationSettingPopup
                      title="New Message"
                      closePopup={this.toggle.bind(this)}
                      handleInputFunc={handleInputFunc}
                    />
                    : null
                }
            </div>
        );
    }
};

export default LocationSetter;
