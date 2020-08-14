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
            logout: false
        }
        this.handleMessages = this.handleMessages.bind(this)
        this.handleSettings = this.handleSettings.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleBack = this.handleBack.bind(this)
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

    render() {
        if (this.state.logout) {
            return <Redirect to='/'/>
        }

        if (this.state.messages) {
            // replace the following 2 lines later///
            const isOwnerOrAdmin = true;
            const isPublic = true;
            // (1) Others accessing a public user's page
            let userContent = null;
            let loggedIn = false;
            // (2) User accessing own account or an admin access a user's account
            if (isOwnerOrAdmin) {
                loggedIn = true;
                userContent = <Navbar
                    handleMessages={this.handleMessages}
                    handleSettings={this.handleSettings}
                    handleLogout={this.handleLogout}
                    handleBack={this.handleBack}/>;
            // (3) Others accessing a private user's profile
            } else if (! isPublic) {
                return <div>Unauthorized</div>;
            }

            return (
                <div>
                    <Topbar
                        username={this.props.currentUser}/>
                    { userContent }
                    <UserMessages username={this.props.currentUser} userLoggedIn={loggedIn}/>
                </div>
            )
        };

        if (this.state.settings) {
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
                    <Settings/>
                </div>
            )
        };
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
            </div>
        )
    }
}

export default User
