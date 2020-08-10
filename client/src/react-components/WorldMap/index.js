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
        <AccountNav isLoggedIn={this.props.isLoggedIn}
                    isAdmin={this.props.isAdmin}
                    username={this.props.username}
                    handleLogout={this.props.handleLogout}/>
        <Header />
        <MapSelection />
      </div>
    );
  }
}

export default WorldMap;
