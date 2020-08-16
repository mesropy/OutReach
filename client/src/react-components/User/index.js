import React from "react";
import {Redirect} from 'react-router-dom';
import {logout} from '../../actions/logout'
import {getUserMessages} from '../../actions/userMessages'
import {addMessage} from '../../actions/addMessage'
import Topbar from "./Topbar"
import Navbar from "./Navbar"
import UserMessages from './UserMessages'
import Settings from './Settings'
import MessageAdder from "../City/Timeline/MessageAdder"


class User extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            messages: false,
            settings: false,
            logout: false,
            user: this.props.userPage,
            userMessages: getUserMessages(this.props.userPage),

            content: "",
            locationName: "",
            pinLeftPos: "",
            pinDownPos: "",
            messages: []
        }
        this.handleMessages = this.handleMessages.bind(this)
        this.handleSettings = this.handleSettings.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleBack = this.handleBack.bind(this);
        this.authorize = this.authorize.bind(this)

        this.handleInput = this.handleInput.bind(this)
        this.removeContent = this.removeContent.bind(this)
        this.handleLocationLeft = this.handleLocationLeft.bind(this)
        this.handleLocationDown = this.handleLocationDown.bind(this)
        this.handleLocationName = this.handleLocationName.bind(this)
        this.removeLocation = this.removeLocation.bind(this)
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

      handleInput = event => {
          const value = event.target.value;
          const name = event.target.name;
          this.setState({
              [name]: value
          });
      };
    
      removeContent = () => {
        this.setState({
          content: ""
        });
      };
    
      handleLocationLeft = (left) => {
        this.setState({
          pinLeftPos: left
        });
      };
    
      handleLocationDown = (down) => {
        this.setState({
          pinDownPos: down
        });
      };
    
      handleLocationName = (name) => {
        this.setState({
          locationName: name
        });
      };
    
      removeLocation = () => {
        this.setState({
          locationName: "",
          pinLeftPos: "",
          pinDownPos: ""
        });
      };
    

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
        const settingsComponent = this.state.settings ?  <Settings user={this} userPage={this.state.user}/> : null
        let userLoggedIn;
        // If anonymous user is visiting
        if (!currentUser) {
            userLoggedIn = false
        }
        // If Admin or Owner is logged in
        else {
            userLoggedIn = true
        }

        let settingsAllow;
        // If anonymous user is visiting
        if (!currentUser) {
            settingsAllow = false;
        }
        else if (currentUser !== userPage.username) {
            settingsAllow = false;
        }
        // If Admin or Owner is logged in
        else {
            settingsAllow = true
        }
        const messagesComponent = this.state.messages ?  <UserMessages user={this} userPage={this.state.user} userLoggedIn={userLoggedIn}/> : null
        return (
            <div>
                <Topbar
                    username={this.state.user.username}
                    city={this.state.user.city}
                    age={this.state.user.age} />
                <Navbar
                    handleMessages={this.handleMessages}
                    handleSettings={this.handleSettings}
                    handleLogout={this.handleLogout}
                    handleBack={this.handleBack}
                    settingsAllow={settingsAllow}
                />
                {messagesComponent}
                {settingsComponent}
                { userLoggedIn ? 
                    <MessageAdder
                        city={ userPage.city }
                        handleInput={ this.handleInput }
                        addMessage={ () => addMessage(this, userPage.username, userPage._id, userPage.city) }
                        currentUser={ userPage.username }
                        currentUserId={ userPage._id }
                        handleLocationLeft={ this.handleLocationLeft }
                        handleLocationDown={ this.handleLocationDown }
                        handleLocationName={ this.handleLocationName }
                        removeContent={ this.removeContent }
                        removeLocation={ this.removeLocation }
                    /> : null}
            </div>
        )
    }
}

export default User
