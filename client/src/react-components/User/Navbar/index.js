import React from 'react';
import {Nav} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faCog} from '@fortawesome/free-solid-svg-icons'
import './styles.css'


class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            usersClass: "text-center",
            messagesClass: "text-center"
        })
        this.resetClasses = this.resetClasses.bind(this)
        this.changeUsersClass = this.changeUsersClass.bind(this)
        this.changeMessagesClass = this.changeMessagesClass.bind(this)
    }

    resetClasses() {
        this.setState({
            usersClass: "text-center",
            messagesClass: "text-center"
        })
    }

    changeUsersClass() {
        const usersClass = this.state.usersClass === "text-center" ? "text-center nav_highlighted" : "text-center"
        this.setState({
            usersClass: usersClass,
            messagesClass: "text-center"
        })
    }

    changeMessagesClass() {
        const messagesClass = this.state.messagesClass === "text-center" ? "text-center nav_highlighted" : "text-center"
        this.setState({
            usersClass: "text-center",
            messagesClass: messagesClass
        })
    }

    render() {
        const { handleMessages, handleLogout, handleBack, handleSettings, userLoggedIn } = this.props;

        return (
            <Nav className="admin_nav_bar flex-column justify-content-center">
                <Nav.Item className="text-right">
                    <button id="backButton" onClick={() => { handleBack(); this.resetClasses() }}>
                        <p>&#10094;</p>
                    </button>
                </Nav.Item>
                <Nav.Item className="text-center">
                    <h5>My Account</h5>
                </Nav.Item>
                <Nav.Item className={this.state.usersClass}>
                    <button onClick={() => { handleMessages(); this.changeUsersClass() }}>
                        <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                        <h6>Messages</h6>
                    </button>
                </Nav.Item>
                {userLoggedIn ? <Nav.Item className={this.state.messagesClass}>
                    <button onClick={() => { handleSettings(); this.changeMessagesClass() }}>
                        <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
                        <h6>Settings</h6>
                    </button>
                </Nav.Item> : null }
                <br /><br /><br />
                <Nav.Item className="text-center">
                    <input type="button" value="Logout" onClick={handleLogout}></input>
                </Nav.Item>
            </Nav>
        )
    }
}

export default Navbar