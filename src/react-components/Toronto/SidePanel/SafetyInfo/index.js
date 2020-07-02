import React from "react";
import infoPic from "./../../static/information.svg";
import { Backdrop, IconButton, Icon } from "@material-ui/core";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'


// Component for the button for safety info, used by SafetyInfo below
class SafetyPopup extends React.Component {
    render() {
        return(
            <div>
                <Backdrop open={true} onClick={this.props.closePopup}></Backdrop>
                <div className="safetyPopup">
                <IconButton id="popup_close_button" onClick={this.props.closePopup}>
                    <FontAwesomeIcon icon={ faTimesCircle } />
                </IconButton>
                <img id="placer_img" src="https://dummyimage.com/1000x600/ededed/3d3d3d"/>
                </div>
            </div>
      );
    }
}

// Component for safety info card & popup
class SafetyInfo extends React.Component {
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
            <div className="panel_card" >
                <h4>Staying Safe<input id="info_pic" type="image" src={infoPic} alt="Info" onClick={ this.toggle.bind(this) }></input></h4>

                { this.state.show ?
                <SafetyPopup
                    closePopup={this.toggle.bind(this)} /> : null }
            </div>
        );
    }
}

export default SafetyInfo;
