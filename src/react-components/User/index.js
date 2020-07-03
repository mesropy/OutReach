import React from "react";
import {Redirect} from 'react-router-dom';
import Topbar from "./Topbar"
import Navbar from "./Navbar"
import UserMessages from './UserMessages'
import Settings from './Settings'

import '../main_styles.css';

class User extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            messages: false,
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

        if (!this.props.userLoggedIn) {
            return (
                <div>
                    <Topbar
                        username={"@user2"}/>
                    <UserMessages username={"@user2"} userLoggedIn={false}/>
                </div>
            )
        };

        if (this.state.messages) {
            return (
                <div>
                    <Topbar
                        username={"@user1"}/>
                <Navbar
                handleMessages={this.handleMessages}
                handleSettings={this.handleSettings}
                handleLogout={this.handleLogout}
                handleBack={this.handleBack}
                >
                </Navbar>
                    <UserMessages username={"@user1"} userLoggedIn={true}/>
            </div>
            )
        };

        if (this.state.settings) {
            return (
                <div>
                    <Topbar
                        username={"@user1"} />/>
                    <Navbar
                        handleMessages={this.handleMessages}
                        handleSettings={this.handleSettings}
                        handleLogout={this.handleLogout}
                        handleBack={this.handleBack}
                    >
                    </Navbar>
                    <Settings/>
                </div>
            )
        };

        return (
            <div>
                <Topbar
                    username={"@user1"} />/>
                <Navbar
                handleMessages={this.handleMessages}
                handleSettings={this.handleSettings}
                handleLogout={this.handleLogout}
                handleBack={this.handleBack}
                ></Navbar>
            </div>
        )
    }
}

export default User