import React from "react";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

import "./styles.css";

class WorldMapNav extends React.Component {
  render(){
    return(
      <Link id="worldMapNav" to={'/WorldMap'}>
          <FontAwesomeIcon icon={faGlobeAmericas}></FontAwesomeIcon>
          <h6>World Map</h6>
      </Link>
    );
  }
}

export default WorldMapNav;
