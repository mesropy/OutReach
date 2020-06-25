import React from "react";
import '../main_styles.css';
import './styles.css';
// import { Link } from "react-router-dom";
// import profilePicture from './static/profile_picture.png';
import PanelCard from "./PanelCard";
import CaseReport from "./CaseReport";
import SafetyInfo from "./SafetyInfo";
import PopupButton from "./MessageAdder";

class Toronto extends React.Component {

    state = {
        username: ""
        // date: new Date(),
        // messages: [
        //   { name: "James", content: "What a beautiful day!" },
        //   { name: "Kate", content: "Kinda worried about " }
        // ]
    }

    render() {

        return (
            <div>

                {/* old top bar commented out at the end of this file, styles commented out too*/}

                <div className="sidePanel">
                    <CaseReport
                        confirmed="13,420"
                        recovered="11,098"
                        active="1,337"
                        status="Yellow"
                    />

                    <SafetyInfo/>

                    <PanelCard
                        title="Poll Question"
                    />
                </div>

                <PopupButton/>
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
