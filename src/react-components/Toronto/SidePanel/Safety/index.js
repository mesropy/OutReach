import React from "react";
import { Backdrop, IconButton} from "@material-ui/core";
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'


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
                  <img id="placer_img" src="https://dummyimage.com/1000x600/ededed/3d3d3d"
                        alt="placer"/>
                </div>
            </div>
      );
    }
}

// Component for safety info card & popup
class Safety extends React.Component {
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
            <div>
                <div id="safety">
                    <div className="panel_card">
                        <h4>Staying Safe
                            <IconButton id="i" onClick={ this.toggle.bind(this) }>
                                <FontAwesomeIcon icon={ faInfo } />
                            </IconButton>
                        </h4>
                    </div>
                </div>
                { this.state.show ?
                <SafetyPopup
                    closePopup={this.toggle.bind(this)} /> : null }
            </div>
        );
    }
}

export default Safety;
