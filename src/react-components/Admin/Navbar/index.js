import React from 'react';
import {Nav} from "react-bootstrap";
import './styles.css'


class Navbar extends React.Component {

    render() {
        const {handleUsers, handleUserMessages, handleLogout} = this.props;

        return (
            <Nav className="nav_bar flex-column justify-content-center">
                <Nav.Item>
                    <h5 className="text-center">My Account</h5>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="1">
                        <h6>Messages</h6>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2">
                        <h6>Settings</h6>
                    </Nav.Link><br/>
                </Nav.Item>
                <Nav.Item>
                    <h5 className="text-center">Admin Control</h5>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="3" >
                        <h6 onClick={handleUsers}>Users</h6>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="4">
                        <h6 onClick={handleUserMessages}>User Messages</h6>
                    </Nav.Link>
                </Nav.Item>
                <br/><br/><br/>
                <Nav.Item>
                    <Nav.Link eventKey="5" className="text-center" >
                        <input type="button" value="Logout" onClick={handleLogout}></input>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default Navbar