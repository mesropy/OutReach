import React from 'react';
import {Nav} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faComments } from '@fortawesome/free-solid-svg-icons'
import './styles.css'


class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            usersClass: "text-left",
            messagesClass: "text-left"
        })
        this.resetClasses = this.resetClasses.bind(this)
        this.changeUsersClass = this.changeUsersClass.bind(this)
        this.changeMessagesClass = this.changeMessagesClass.bind(this)
    }
    
    resetClasses() {
        this.setState({
            usersClass: "text-left",
            messagesClass: "text-left"
        })
    }

    changeUsersClass() {
        const usersClass = this.state.usersClass === "text-left" ? "text-left, nav_highlighted" : "text-left"
        this.setState({
            usersClass: usersClass,
            messagesClass: "text-left"
        })
    }

    changeMessagesClass() {
        const messagesClass = this.state.messagesClass === "text-left" ? "text-left, nav_highlighted" : "text-left"
        this.setState({
            usersClass: "text-left",
            messagesClass: messagesClass
        })
    }

    render() {
        const {handleUsers, handleMessages, handleLogout, handleBack} = this.props;

        return (
            <Nav className="nav_bar flex-column justify-content-center">
                <Nav.Item className="text-right">
                    <button id="backButton" onClick={() => {handleBack(); this.resetClasses()}}>
                        <p>&#10094;</p>
                    </button>
                </Nav.Item>
                <Nav.Item className="text-center">
                    <h5>Admin Control</h5>
                </Nav.Item>
                <Nav.Item className={this.state.usersClass}>
                    <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                    <button onClick={() => {handleUsers(); this.changeUsersClass()}}>
                        <h6>Users</h6>
                    </button>
                </Nav.Item>
                <Nav.Item className={this.state.messagesClass}>
                    <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
                    <button onClick={() => {handleMessages(); this.changeMessagesClass()}}>
                        <h6>Messages</h6>
                    </button>
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