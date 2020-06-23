import React from "react";
import Toolbar from "./Toolbar"
import Navbar from "./Navbar"
import '../main_styles.css';

class Admin extends React.Component {
    render() {
        return (
            <div>
                <Toolbar/>
                <Navbar/>
            </div>
        )
    }
}

export default Admin