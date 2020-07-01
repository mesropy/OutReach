import React from "react";
import { Link } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import PinIcon from './PinIcon'

import "./styles.css";

class Pin extends React.Component {
  render(){
    const { city } = this.props;
    let link;
    if (this.props.userLoggedIn) {
      link = <Link to="/U/Toronto" >
              <div className="button_container">
                <button className="pin_button">
                  <PinIcon />
                </button>
              </div>
            </Link>
    }
    else if (this.props.adminLoggedIn) {
      link = <Link to="/A/Toronto" >
              <div className="button_container">
                <button className="pin_button">
                  <PinIcon />
                </button>
              </div>
            </Link>
    }
    else {
      link = <Link to="/Toronto" >
              <div className="button_container">
                <button className="pin_button">
                  <PinIcon />
                </button>
              </div>
            </Link>
    }
    return (
      <Tooltip className={ city }
               title={ city }
               placement="top"
               arrow >
          {link}
      </Tooltip>
    );
  }
}

export default Pin;
