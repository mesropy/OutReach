import React from 'react';
import { Link } from "react-router-dom";
import {AppBar, Toolbar} from '@material-ui/core'
import logo from './static/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import "./styles.css"

// Component for displaying the top bar
class Topbar extends React.Component {
    render() {
        return (
            <AppBar id="appbar">
                <Toolbar id="toolbar_div">
                    <div id="back_div">
                        <Link to="/">
                            <h3 id="title">OutReach</h3>
                        <img id="logo" alt="The logo for the web-application" src={logo}/>
                        </Link>
                    </div>
                    <div id="admin_div">
                        <h5 id="adminName">admin</h5>
                            <FontAwesomeIcon icon={faGlobeAmericas}></FontAwesomeIcon>
                        <Link to="/WorldMap">
                            <h5 id="worldMap">World Map</h5>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Topbar
