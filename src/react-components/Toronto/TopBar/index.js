import React from "react";
import './styles.css';
import { Link } from "react-router-dom";

// Component to display top navigation bar
class TopBar extends React.Component {
    render() {
        const {cityName} = this.props

        return (
            <div className="topBar">
                <Link to={""}>
                    OutReach
                </Link>

                <Link to={"./../Toronto"} className="mid">
                    {cityName}
                </Link>
            </div>
        );
    }
}

export default TopBar;
