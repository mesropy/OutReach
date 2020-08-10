import React from "react";

import './../main_styles.css'

// import components
import Header from "./Header";
import MapSelection from "./MapSelection";
import AccountNav from "./../AccountNav";

/* Component for the Home page */
class WorldMap extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <AccountNav currentUser={this.props.currentUser}
                    handleLogout={this.props.handleLogout}/>
        <MapSelection />
      </div>
    );
  }
}

export default WorldMap;
