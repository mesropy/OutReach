import React from "react";

import './styles.css';
import './../main_styles.css'

// import components
import Header from "./Header";
import MapSelection from "./MapSelection";
import AccountNavigation from "./AccountNavigation";

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
        <AccountNavigation /*username={ this.state.username }*/ />
        <Header />
        <MapSelection />
      </div>
    );
  }
}

export default Home;
