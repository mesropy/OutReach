import React from "react";
import '../main_styles.css';
import './styles.css';
import { Link } from "react-router-dom";
// import logo from './static/logo.png';
import profilePicture from './static/profile_picture.png';

class Toronto extends React.Component {
    render() {
        return (
            <div>
                {/* <meta charSet="utf-8" />
                <title>Toronto</title>
                <link rel="stylesheet" type="text/css" href="styles.css" /> */}
                
                <div className="topBar">
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
                </div>

                <div className="sidePanel">
                    <div className="panelCard">
                        <h4>COVID-19</h4>
                        <p>Confirmed: 13,420</p>
                        <p>Recovered: 11,098</p>
                        <p>Active: 1,337</p>
                        <p>Status: Yellow</p>
                    </div>

                    <div className="panelCard">
                        <h4>Safety info</h4>
                    </div>

                    <div className="panelCard">
                        <h4>Poll Question</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Toronto;

