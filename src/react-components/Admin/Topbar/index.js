import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core'
import logo from './static/logo.svg';
import profilePicture from './static/profile_picture.png';
import { Link } from 'react-router-dom';
import "./styles.css"

class Topbar extends React.Component {
    render() {
        return (
            <AppBar id="appbar">
                <Toolbar id="toolbar_div">
                    <div id="back_div">
                        <Link to={'/'}>
                            <h3>OutReach</h3>
                        </Link>
                        <img id="logo" alt="The logo for the web-application" src={logo}/>
                    </div>
                    <div id="admin_div">
                        <img id="profile_pic" alt="A default profile pic for the account" src={profilePicture}/>
                        <h5>admin</h5>
                    </div>
                </Toolbar>
            </AppBar>
            // <div id="toolbar_div">
            //     <Link to={'/'}>
            //         <h3>OutReach</h3>
            //     </Link>
            //     <img id="logo" alt="The logo for the web-application" src={logo}/>
            //     <img id="profile_pic" alt="A default profile pic for the account" src={profilePicture}/>
            //     <h5>admin</h5>
            // </div>
        )
    }
}

export default Topbar