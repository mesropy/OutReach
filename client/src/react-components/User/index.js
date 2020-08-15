import React from "react";
import {Redirect} from 'react-router-dom';
import {logout} from '../../actions/logout'
import {getUserMessages} from '../../actions/userMessages'
import Topbar from "./Topbar"
import Navbar from "./Navbar"
import UserMessages from './UserMessages'
import Settings from './Settings'


class User extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            messages: false,
            settings: false,
            logout: false,
            user: this.props.userPage,
            userMessages: getUserMessages(this.props.userPage)
        }
        this.handleMessages = this.handleMessages.bind(this)
        this.handleSettings = this.handleSettings.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleBack = this.handleBack.bind(this);
        this.authorize = this.authorize.bind(this)
    }

    handleMessages(e) {
        const toggle = this.state.messages;
        this.setState({
            messages: !toggle,
            settings: false,
        })
    }

    handleSettings(e) {
        const toggle = this.state.settings;
        this.setState({
            messages: false,
            settings: !toggle,
        })
    }

    handleBack(e) {
        this.setState({
            messages: false,
            settings: false
        })
    }

    handleLogout(e) {
        this.setState({
            messages: false,
            settings: false,
            logout: true,
        })
    }

    authorize(userPage, currentUser) {
        // 1) Anonymous User
        if (!currentUser) {
            // Public
            if (userPage.public) {
                return true
            }
            // Private 
            else {
                return false
            }
        }
        // 2) Non-Anon User
        else {
            // 2.1) Admin
            if (currentUser.startsWith("admin")) {
                return true
            }
            // 2.2) Owner
            if (currentUser === userPage.username) {
                return true
            }
            // 2.3) Non-Owner User
            if (userPage.public) {
                return true
            } else {
                return false
            }
        }
    }

    render() {
        if (this.state.logout) {
            logout(this.props.handleLogout)
            return <Redirect to='/'/>
        }

        // userPage is the User associated with the page
        // currentUser is the User accessing the page
        const {userPage, currentUser} = this.props

        if (!this.authorize(userPage, currentUser)) {
            return (<div>Unauthorized</div>)
        }

        // If settings is clicked
        const settingsComponent = this.state.settings ?  <Settings/> : null
        let userLoggedIn;
        // If anonymous user is visiting
        if (!currentUser) {
            userLoggedIn = false
        }
        // If Admin or Owner is logged in
        else {
            userLoggedIn = true
        }
        const messagesComponent = this.state.messages ?  <UserMessages user={this} userPage={this.props.userPage} userLoggedIn={userLoggedIn}/> : null

        return (
            <div>
                <Topbar
                    username={this.props.userPage.username} />
                <Navbar
                    handleMessages={this.handleMessages}
                    handleSettings={this.handleSettings}
                    handleLogout={this.handleLogout}
                    handleBack={this.handleBack}
                    userLoggedIn={userLoggedIn}
                />
                {messagesComponent}
                {settingsComponent}
            </div>
        )
    }
}

export default User
