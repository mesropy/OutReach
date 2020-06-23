import React from "react";

import "./styles.css";

/* The Header Component */
class Header extends React.Component {
  render() {
    return (
      <div >
          <ul className="header">
              <li><h1>OutReach</h1></li>
              <li><img className="logo" src={require("./static/logo.svg")} alt= "logo"/></li>
              <li><h5>connecting through our stories during COVID-19</h5></li>
          </ul>
      </div>
    );
  }
}

export default Header;
