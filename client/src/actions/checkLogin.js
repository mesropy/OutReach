import React from 'react';
import Admin from './../react-components/Admin'

// Basic authentication for logging in
export const checkLogin = (state) => {
    return (state.username === "user" && state.password === "user") || (state.username === "admin" && state.password === "admin")
}

// Check if currentUser is an admin
export function checkAdmin() {
    const currentUser = this.state.currentUser;
    if (currentUser === null) {
        return null
    }
    return currentUser.startsWith("admin") ? <Admin handleLogout={this.handleLogout.bind(this)} /> : null
}