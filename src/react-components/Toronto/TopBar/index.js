import React from "react";
import './styles.css';
import { Link } from "react-router-dom";
import profilePicture from '../static/profile_picture.png';

class TopBar extends React.Component {
    render() {
        return (
            <div className="topBar">
                <Link to={""}>
                    OutReach
                </Link>

                <Link to={"./../Toronto"} className="mid">
                    TORONTO
                </Link>

                <div className="rightBar">
                    <Link to={""}>
                        <div id="userBlock">
                            <img id="topBar-Icon" src={profilePicture} alt="user icon" />
                            <p id="topBar-Username">user</p>
                        </div>
                    </Link>
                    <Link to={""} className="actionCorner">log in</Link>
                    <Link to={"./../Register"} className="action">sign up</Link>
                </div>
            </div>
        );
    }
}

export default TopBar;