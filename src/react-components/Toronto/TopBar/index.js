import React from "react";
import './styles.css';
import './../../main_styles.css';

// import components
import HomePageNav from "./../../HomePageNav";
import WorldMapNav from "./../../WorldMapNav";
import AccountNav from "./../../AccountNav";

// Component to display top navigation bar
class TopBar extends React.Component {
    render() {
        const {city} = this.props

        return (
            <div className="topBar">
              <HomePageNav />

              {/* the title: the name of the city */}
              <svg width="250" height="50">
                  <text x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        letterSpacing="1.5">
                        { city }</text>
              </svg>
              <WorldMapNav />
              <AccountNav
                userLoggedIn={this.props.userLoggedIn}
                adminLoggedIn={this.props.adminLoggedIn}
              />
            </div>
        );
    }
}

export default TopBar;
