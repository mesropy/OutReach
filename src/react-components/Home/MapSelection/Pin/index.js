import React from "react";
import { Link } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import PinIcon from './PinIcon'

import "./styles.css";

class Pin extends React.Component {
  render(){
    const { city } = this.props;

    return (
      <Tooltip className={ city }
               title={ city }
               placement="top"
               arrow >
          <Link to="./../../Toronto" >
            <div className="button_container">
              <button className="pin_button">
                <PinIcon />
              </button>
            </div>
          </Link>
      </Tooltip>
    );
  }
}

export default Pin;
