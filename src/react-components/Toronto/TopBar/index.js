import React from "react";
import './styles.css';
import './../../main_styles.css';

// import components
import HomePageNav from "./../../HomePageNav";
import AccountNav from "./../../AccountNav";

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
              <AccountNav />
            </div>
        );
    }
}

export default TopBar;
