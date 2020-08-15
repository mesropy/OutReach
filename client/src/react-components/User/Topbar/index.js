import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core'
import logo from './static/logo.svg';
import pfp from './static/profile-icon.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import "./styles.css"

class Topbar extends React.Component {
    state = {
      city: "TORONTO",
      age: 20
    }

    render() {
        return (
            <AppBar id="appbar">
                <Toolbar id="toolbar_div_user">
                    <div id="back_div">
                        <Link to={'/'} className="text-link">
                            <h3 id="title">OutReach</h3>
                        </Link>
                        <img id="logo" alt="The logo for the web-application" src={logo}/>
                    </div>
                    <div id="display_div">
                        <img id="pfp" alt="The user's profile" src={pfp} />
                        <h5><b>{this.props.currentUser}</b></h5>
                        <b>{this.state.city }{this.state.age ? ` · ${this.state.age} yrs` : null}</b>
                    </div>
                    <div id="user_div">
                        <h5 id="userName">{this.props.currentUser}</h5>
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
