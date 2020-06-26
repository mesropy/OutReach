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
            user_messages: false,
            logout: false
        }
        this.handleUsers = this.handleUsers.bind(this)
        this.handleUserMessages = this.handleUserMessages.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleUsers(e) {
        this.setState({
            users: true,
            user_messages: false,
        })
    }

    handleUserMessages(e) {
        this.setState({
            users: false,
            user_messages: true,
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
        if (this.state.users) {
            console.log(this.state)
            return (
            <div>
                <Topbar/>
                <Navbar
                handleUsers={this.handleUsers}
                handleUserMessages={this.handleUserMessages}
                handleLogout={this.handleLogout}
                >
                </Navbar>
                <Users/>
            </div>
            )
        }
        else if (this.state.user_messages) {
            console.log(this.state)
            return (
                <div>
                <Topbar/>
                <Navbar
                handleUsers={this.handleUsers}
                handleUserMessages={this.handleUserMessages}
                handleLogout={this.handleLogout}
                >
                </Navbar>
                <UserMessages/>
                </div>
                )
        }
        return (
            <div>
                <Topbar/>
                <Navbar
                handleUsers={this.handleUsers}
                handleUserMessages={this.handleUserMessages}
                handleLogout={this.handleLogout}
                ></Navbar>
            </div>
        )
    }
}

export default Admin