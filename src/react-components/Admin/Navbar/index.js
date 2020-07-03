import React from 'react';
import {Nav} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faComments } from '@fortawesome/free-solid-svg-icons'
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
        const {handleUsers, handleMessages, handleLogout, handleBack} = this.props;

        return (
            <Nav className="admin_nav_bar flex-column justify-content-center">
                <Nav.Item className="text-right">
                    <button id="backButton" onClick={() => {handleBack(); this.resetClasses()}}>
                        <p>&#10094;</p>
                    </button>
                </Nav.Item>
                <Nav.Item className="text-center">
                    <h5>Admin Control</h5>
                </Nav.Item>
                <Nav.Item className={this.state.usersClass}>
                    <button onClick={() => {handleUsers(); this.changeUsersClass()}}>
                        <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                        <h6>Users</h6>
                    </button>
                </Nav.Item>
                <Nav.Item className={this.state.messagesClass}>
                    <button onClick={() => {handleMessages(); this.changeMessagesClass()}}>
                    <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
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