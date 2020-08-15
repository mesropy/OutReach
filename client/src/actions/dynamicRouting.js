import React from 'react';
import User from "../react-components/User"

// Get Users
export function getUsers() {
    const url = '/users'
    fetch(url).then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            console.log("Couldn't get users.")
            return [];
        }
    }).then(json => {
        this.setState({
            users: json
        })
    })
    .catch(error => {
        console.log(error)
    })
}

// Render the User component based on the username
export function renderUsers(routerProps) {
    const username = routerProps.match.params.username;
    const foundUser = this.state.users.find(user => user.username === username);
    const component = foundUser ? <User
                                    global={this}
                                    userPage={foundUser}
                                    currentUser={this.state.currentUser}
                                    currentUserId={this.state.currentUserId}
                                    handleLogout={this.handleLogout.bind(this)} /> : null
    return component
}
