import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core'
import logo from './static/logo.svg';
import { Link } from 'react-router-dom';
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
                    <div id="admin_div">
                        <Link to={'/Admin'} className="text-link">
                            <h5 >admin</h5>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Topbar