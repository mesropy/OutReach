import React from "react";
import { Link } from "react-router-dom";
import logo from "../City/static/logo.svg";

import "./styles.css";
import "./../main_styles.css";

class HomePageNav extends React.Component {
  render(){
    return(
      <div className="home_page_nav" >
        <Link to={""} className="app_name">
            <h3>OutReach</h3>
        </Link>
        <Link to={""}>
            <img className="home_nav_logo" src={ logo } alt="logo" />
        </Link>
      </div>
    );
  }
}

export default HomePageNav;
