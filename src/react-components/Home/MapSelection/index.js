import React from "react";

import "./styles.css";

class MapSelection extends React.Component {
  render(){
    return(
      <div>
        <img className="world_map" src={require("./static/world_map.svg")} alt="world map"/>
      </div>
    );
  }
}

export default MapSelection;
