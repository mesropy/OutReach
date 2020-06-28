import React from "react";
import infoPic from "../static/information.svg";
import SafetyPic from "../static/safety.PNG";
import { Button } from "@material-ui/core";
import './styles.css';

// Component for the button for safety info, used by SafetyInfo below
class SafetyPopup extends React.Component {
    render() {
      return(
        <div className="safetyPopup">
            <Button id="safetyClose" onClick={this.props.closePopup}><strong>X</strong></Button>
            <div>
                <img src={SafetyPic} alt="safetyInfo"/>
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
            <div className="panelCard">
                <h4>Staying Safe<input type="image" src={infoPic} alt="Info" onClick={this.toggle.bind(this)}></input></h4>

                {this.state.show ?
                <SafetyPopup
                    closePopup={this.toggle.bind(this)}
                />
                : null
                }
            </div>
        );
    }
}

export default SafetyInfo;

