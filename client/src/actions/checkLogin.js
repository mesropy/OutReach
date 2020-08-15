import React from 'react';
import Admin from './../react-components/Admin'
import Home from './../react-components/Home'

// Basic authentication for logging in
export const checkLogin = (state) => {
    return (state.username === "user" && state.password === "user") || (state.username === "admin" && state.password === "admin")
}

// Check if currentUser is an admin
export function checkAdmin() {
    const currentUser = this.state.currentUser;
    const adminComponent = <Admin global={this} handleLogout={this.handleLogout.bind(this)} />;
    const homeComponent = <Home
                                currentUser={this.state.currentUser}
                                handleLogout={this.handleLogout.bind(this)}
                            />
    if (currentUser === null) {
        return homeComponent
    }
    return currentUser.startsWith("admin") ?  adminComponent : homeComponent 
}