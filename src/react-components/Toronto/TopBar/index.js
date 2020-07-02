import React from "react";
import './styles.css';
import './../../main_styles.css';
import { Link } from 'react-router-dom';

// import components
import HomePageNav from "./../../HomePageNav";
import AccountNav from "./../../AccountNav";
import AccountNavigation from "./../../Home/AccountNavigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

// Component to display top navigation bar
class TopBar extends React.Component {
    render() {
        const {cityName} = this.props

        return (
            <div className="topBar">
              <HomePageNav />
              <svg width="250" height="50">
                  <text x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        letterSpacing="1.5">
                        { cityName }</text>
              </svg>
              <AccountNav
                userLoggedIn={this.props.userLoggedIn}
                adminLoggedIn={this.props.adminLoggedIn}
              />
              <Link className="worldLink" to={'/'}>
                  <FontAwesomeIcon id="globe" icon={faGlobeAmericas}></FontAwesomeIcon>
                  <h6 id="globe-text">World Map</h6>
              </Link>
              <AccountNavigation/>
            </div>
        );
    }
}

export default TopBar;
