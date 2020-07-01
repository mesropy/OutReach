import React from "react";

import './styles.css';
import './../main_styles.css'

// import components
import Header from "./Header";
import MapSelection from "./MapSelection";
import AccountNav from "./../AccountNav";

/* Component for the Home page */
class Home extends React.Component {

  render() {
    return (
      <div>
        <AccountNav 
          userLoggedIn={this.props.userLoggedIn}
          adminLoggedIn={this.props.adminLoggedIn} />
        <Header />
        <MapSelection
          userLoggedIn={this.props.userLoggedIn}
          adminLoggedIn={this.props.adminLoggedIn}
        />
      </div>
    );
  }
}

export default Home;
