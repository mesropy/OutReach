import React from 'react';
import {Nav} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faCog} from '@fortawesome/free-solid-svg-icons'
import './styles.css'


class Navbar extends React.Component {

    render() {
        const {handleMessages, handleLogout, handleBack, handleSettings} = this.props;

        return (
            <Nav className="nav_bar flex-column justify-content-center">
                <Nav.Item className="text-right">
                    <button id="backButton" onClick={handleBack}>
                        <p>&#10094;</p>
                    </button>
                </Nav.Item>
                <Nav.Item>
                    <h5 className="text-center">My Account</h5>
                </Nav.Item>
                <Nav.Item className="text-center">
                    <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                    <button onClick={handleMessages}>
                        <h6>Messages</h6>
                    </button>
                </Nav.Item>
                <Nav.Item className="text-center">
                    <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
                    <button onClick={handleSettings}>
                        <h6>Settings</h6>
                    </button><br/>
                </Nav.Item>
                <br/><br/><br/>
                <Nav.Item className="text-center">
                    <input type="button" value="Logout" onClick={handleLogout}></input>
                </Nav.Item>
            </Nav>
        )
    }
}

export default Navbar