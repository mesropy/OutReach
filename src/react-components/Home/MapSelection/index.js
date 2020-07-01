import React from "react";
import Pin from "./Pin";

import "./styles.css";

class MapSelection extends React.Component {
  render(){
    return(
      <div className="map_container">
        <img className="world_map" src={require("./static/world_map.svg")} alt="world map"/>
        <Pin 
          city="Toronto" 
          userLoggedIn={this.props.userLoggedIn}
          adminLoggedIn={this.props.adminLoggedIn}
        />
        <Pin 
          city="Paris"
          userLoggedIn={this.props.userLoggedIn}
          adminLoggedIn={this.props.adminLoggedIn} 
          />
        <Pin 
          city="Montréal" 
          userLoggedIn={this.props.userLoggedIn}
          adminLoggedIn={this.props.adminLoggedIn}
        />
      </div>
    );
  }
}

export default MapSelection;
