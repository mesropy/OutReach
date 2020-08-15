import React from "react";
import { Backdrop, IconButton, ButtonGroup, Button } from "@material-ui/core";
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

// Component for the button for safety info, used by SafetyInfo below
class SafetyPopup extends React.Component {
    getSafetyUrl(city){
      switch(city.toLowerCase()) {
          case "toronto":
              return "https://www.toronto.ca/home/covid-19/"
          case "montréal":
              return "https://santemontreal.qc.ca/en/public/coronavirus-covid-19/"
          case "paris":
              return "https://www.paris.fr/coronavirus-covid-19"
          default:
              return "https://www.toronto.ca/home/covid-19/"
      }
    }

    render() {
      const { closePopup, city } = this.props;

      const safetyUrl = this.getSafetyUrl(city)

        return(
            <div>
                <Backdrop open={true} onClick={closePopup}></Backdrop>
                <div id="safetyPopup">
                  <h4>Stay Safe and Help Reduce the Spread</h4>
                  <IconButton id="popup_close_button" onClick={this.props.closePopup}>
                      <FontAwesomeIcon icon={ faTimesCircle } />
                  </IconButton>

                  <ol id="safetyPoints">
                    <li>
                      <img src={require("./static/hand-wash.svg")} alt=""/>
                      <span>Wash your hands often</span>
                    </li>
                    <li>
                      <img src={require("./static/cough.svg")} alt=""/>
                      <span>Cough or sneeze into your elbow</span>
                    </li>
                    <li>
                      <img src={require("./static/do-not-touch.svg")} alt=""/>
                         <span>Don’t touch your face</span>
                    </li>
                    <li>
                      <img src={require("./static/social-distancing.svg")} alt=""/>
                      <span>Keep a 2m distance from people in public</span>
                    </li>
                    <li>
                      <img src={require("./static/house.svg")} alt=""/>
                      <span>Stay at home when possible</span>
                    </li>
                  </ol>

                  <span>For more information: </span>

                  <ButtonGroup variant= "outlined"
                                color="primary">
                    <Button href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
                        W.H.O.
                    </Button>
                    <Button href={safetyUrl}>
                      { city }
                    </Button>
                  </ButtonGroup>

                  <div id="iconCredits">
                        Icons made by <a href="https://www.flaticon.com/authors/srip ">srip</a>,
                                    <a href="https://www.flaticon.com/authors/monkik" title="monkik"> monkik</a>,
                                    <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik</a>, and
                                    <a href="https://www.flaticon.com/authors/payungkead" title="Payungkead"> Payungkead </a>
                        from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div>
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
        const { city } = this.props;

        return (
            <div className="panel_card panel_card_pos2">
                <div>
                  <span className="light_blue_highlight">
                    <h4 id="staying_safe">Staying Safe</h4>
                    <IconButton id="i" onClick={ this.toggle.bind(this) }>
                        <FontAwesomeIcon icon={ faInfo } />
                    </IconButton>
                  </span>
                </div>
                { this.state.show ?
                <SafetyPopup
                    closePopup={this.toggle.bind(this)}
                    city={ city }/> : null }
            </div>
        );
    }
}

export default Safety;
