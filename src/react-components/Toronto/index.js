import React from "react";
import '../main_styles.css';
import './styles.css';
// import { Link } from "react-router-dom";
// import profilePicture from './static/profile_picture.png';
import PanelCard from "./PanelCard";
import CaseReport from "./CaseReport";

class Toronto extends React.Component {
    render() {
        return (
            <div>

                <div className="sidePanel">
                    <CaseReport
                        confirmed="13,420"
                        recovered="11,098"
                        active="1,337"
                        status="Yellow"
                    />

                    <PanelCard
                        title="Safety info"
                    />

                    <PanelCard
                        title="Poll Question"
                    />
                </div>
            </div>
        );
    }
}

export default Toronto;

                {/* <div className="topBar">
                    <Link to={"./../World"}>
                        &lt; World Map
                    </Link>

                    <Link to={"./../Toronto"} className="mid">
                        TORONTO
                    </Link>

                    <div className="rightBar">
                        <Link to={""}>
                            <div id="userBlock">
                                <img id="icon" src={profilePicture} alt="user icon" />
                                <p id="username">user</p>
                            </div>
                        </Link>
                        <Link to={""} className="actionCorner">log in</Link>
                        <Link to={"./../Register"} className="action">sign up</Link>
                    </div>
                </div> */}
