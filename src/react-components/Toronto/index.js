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
                <TopBar cityName="TORONTO"/>
                <div className="mainContent">
                    <SidePanel />
                    <Queue />
                </div>
            </div>
        );
    }
}

export default Toronto;
