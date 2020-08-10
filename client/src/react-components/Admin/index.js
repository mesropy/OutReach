import React from "react";
import {Redirect} from 'react-router-dom';
import Topbar from "./Topbar"
import Navbar from "./Navbar"
import Users from './Users'
import AdminPoll from './Polls'
import UserMessages from './UserMessages'
import '../main_styles.css';

class Admin extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: false,
            userMessages: true,
            polls: false,
            logout: false
        }
        this.handleUsers = this.handleUsers.bind(this)
        this.handleMessages = this.handleMessages.bind(this)
        this.handlePolls = this.handlePolls.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleBack = this.handleBack.bind(this)
    }

    handleUsers(e) {
        const toggle = this.state.users;
        this.setState({
            users: !toggle,
            userMessages: false,
            polls: false
        })
    }

    handleMessages(e) {
        const toggle = this.state.userMessages;
        this.setState({
            users: false,
            userMessages: !toggle,
            polls: false
        })
    }

    handlePolls(e) {
        const toggle = this.state.polls;
        this.setState({
            users: false,
            userMessages: false,
            polls: !toggle
        })
    }

    handleBack(e) {
        this.setState({
            users: false,
            userMessages: false
        })
    }

    handleLogout(e) {
        this.setState({
            users: false,
            userMessages: false,
            logout: true
        })
    }

    render() {
        if (this.state.logout) {
            this.props.handleLogout();
            return <Redirect to='/'/>
        }
        let content;
        if (this.state.users) {
            content = <Users/>
        }
        else if (this.state.userMessages) {
            content = <UserMessages/>
        }
        else if (this.state.polls) {
            content = <AdminPoll/>
        }
        else {
            content = null
        }
        return (
            <div>
                <Topbar/>
                <Navbar
                handleUsers={this.handleUsers}
                handleMessages={this.handleMessages}
                handlePolls={this.handlePolls}
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