import React from "react";
import './styles.css';
import { Link } from "react-router-dom";
import logo from "../static/logo.svg";

// Component to display top navigation bar
class TopBar extends React.Component {
    render() {
        const {cityName} = this.props

        return (
            <div className="topBar">
                <Link to={""}>
                    <strong>OutReach</strong>
                    <img className="topBar-logo" src={logo} alt="logo" />
                </Link>

                <Link to={"./../Toronto"} className="mid">
                    <strong>{cityName}</strong>
                </Link>
            </div>
        );
    }
}

export default TopBar;
