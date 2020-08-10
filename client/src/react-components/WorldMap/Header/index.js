import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

/* The Header Component */
class Header extends React.Component {
  render() {
    return (
      <div >
          <ul className="header">
              <li>
                <Link to={""} className="app_name">
                  <h1>OutReach</h1>
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <img className="home_nav_logo" src={require("./static/logo.svg")} alt="logo" />
                </Link>
              </li>
              <li><h5>connecting through our stories during COVID-19</h5></li>
          </ul>
      </div>
    );
  }
}

export default Header;
