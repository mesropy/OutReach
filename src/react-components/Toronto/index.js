import React from "react";
import '../main_styles.css';

// import components
import TopBar from "./TopBar";
import SidePanel from "./SidePanel";
import Timeline from "./Timeline";

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
                <Timeline />
            </div>
        );
    }
}

export default Toronto;
