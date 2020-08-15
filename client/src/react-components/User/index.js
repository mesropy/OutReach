import React from "react";
import {Redirect} from 'react-router-dom';
import Topbar from "./Topbar"
import Navbar from "./Navbar"
import UserMessages from './UserMessages'
import Settings from './Settings'


class User extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            messages: true,
            settings: false,
            logout: false,
            user: this.props.userPage
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
        const messagesComponent = this.state.messages ?  <UserMessages username={this.props.currentUser} userLoggedIn={false}/> : null

        // if (this.state.messages) {
        //     // replace the following 2 lines later///
        //     const isOwnerOrAdmin = true;
        //     const isPublic = true;
        //     // (1) Others accessing a public user's page
        //     let userContent = null;
        //     let loggedIn = false;
        //     // (2) User accessing own account or an admin access a user's account
        //     if (isOwnerOrAdmin) {
        //         loggedIn = true;
        //         userContent = <Navbar
        //             handleMessages={this.handleMessages}
        //             handleSettings={this.handleSettings}
        //             handleLogout={this.handleLogout}
        //             handleBack={this.handleBack}/>;
        //     // (3) Others accessing a private user's profile
        //     } else if (! isPublic) {
        //         return 
        //     }

        //     return (
        //         <div>
        //             <Topbar
        //                 username={this.props.currentUser}/>
        //             { userContent }
                   
        //         </div>
        //     )
        // };
        return (
            <div>
                <Topbar
                    username={this.props.currentUser} />
                <Navbar
                    handleMessages={this.handleMessages}
                    handleSettings={this.handleSettings}
                    handleLogout={this.handleLogout}
                    handleBack={this.handleBack}
                />
                {messagesComponent}
                {settingsComponent}
            </div>
        )
    }
}

export default User
