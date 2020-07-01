import React from "react";
import {Redirect} from 'react-router-dom';
import Topbar from "./Topbar"
import Navbar from "./Navbar"
import Users from './Users'
import UserMessages from './UserMessages'
import '../main_styles.css';

class Admin extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: false,
            user_messages: true,
            logout: false
        }
        this.handleUsers = this.handleUsers.bind(this)
        this.handleUserMessages = this.handleUserMessages.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleBack = this.handleBack.bind(this)
    }

    handleUsers(e) {
        const toggle = this.state.users;
        this.setState({
            users: !toggle,
            user_messages: false,
        })
    }

    handleUserMessages(e) {
        const toggle = this.state.users_messages;
        this.setState({
            users: false,
            user_messages: !toggle,
        })
    }

    handleBack(e) {
        this.setState({
            users: false,
            user_messages: false
        })
    }

    handleLogout(e) {
        this.setState({
            users: false,
            user_messages: false,
            logout: true
        })
    }

    render() {
        if (this.state.logout) {
            return <Redirect to='/'/>
        }
        let content = null;
        if (this.state.users) {
            content = <Users/>
        }
        else if (this.state.user_messages) {
            content = <UserMessages/>
        }
        return (
            <div>
                <Topbar/>
                <Navbar
                handleUsers={this.handleUsers}
                handleMessages={this.handleUserMessages}
                handleLogout={this.handleLogout}
                handleBack={this.handleBack}
                >
                </Navbar>
                {content}
            </div>
        )
    }
}

export default Admin