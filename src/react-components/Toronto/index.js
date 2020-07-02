import React from "react";
import '../main_styles.css';

// import components
import TopBar from "./TopBar";
import SidePanel from "./SidePanel";
import Queue from "./Queue"

class Toronto extends React.Component {
    render() {
        return (
            <div>
                <TopBar
                    cityName="TORONTO"
                    userLoggedIn={this.props.userLoggedIn}
                    adminLoggedIn={this.props.adminLoggedIn}
                    />
                <SidePanel />
                <Queue className="queue"/>
            </div>
        );
    }
}

export default Toronto;
