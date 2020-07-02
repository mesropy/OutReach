import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core'
import logo from './static/logo.svg';
import pfp from './static/profile_picture.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import "./styles.css"

class Topbar extends React.Component {
    render() {
        return (
            <AppBar id="appbar">
                <Toolbar id="toolbar_div">
                    <div id="back_div">
                        <Link to={'/'} className="text-link">
                            <h3 id="title">OutReach</h3>
                        </Link>
                        <img id="logo" alt="The logo for the web-application" src={logo}/>
                    </div>
                    <div id="display_div">
                        <img id="pfp" alt="The user's profile picture" src={pfp}/>
                        TORONTO
                        20 yrs
                    </div>
                    <div id="user_div">
                        <h5 id="userName">@user1</h5>
                            <FontAwesomeIcon icon={faGlobeAmericas}></FontAwesomeIcon>
                        <a href="/">
                            <h5 id="worldMap">World Map</h5>
                        </a>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Topbar