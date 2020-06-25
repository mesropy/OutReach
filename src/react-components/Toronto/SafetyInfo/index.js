import React from "react";
import infoPic from "../static/information.svg";
import './styles.css';

class SafetyInfo extends React.Component {

    handle() {
        alert("Safety Advice");
    }

    render() {
        return (
            <div className="panelCard">
                <h4>Staying Safe<input type="image" src={infoPic} alt="Info" onClick={() => this.handle()}></input></h4>
            </div>
        );
    }
}

export default SafetyInfo;
