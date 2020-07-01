import React from "react";

import './styles.css';
import './../main_styles.css'

// import components
import Header from "./Header";
import MapSelection from "./MapSelection";
import AccountNav from "./../AccountNav";

/* Component for the Home page */
class Home extends React.Component {
/*
  state = {
    username: "username"
  }
*/
  render() {
    return (
      <div>
        <AccountNav /*username={ this.state.username }*/ />
        <Header />
        <MapSelection />
      </div>
    );
  }
}

export default Home;
