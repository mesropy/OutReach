import React from 'react';
import logo from './static/logo.png';
import profilePicture from './static/profile_picture.png';
import { Link } from 'react-router-dom';

class Toolbar extends React.Component {
    render() {
        return (
            <div>
                <Link to={'/'}>
                    <h1>OutReach</h1>
                </Link>
                <img src={logo}/>
                <img src={profilePicture}/>
                <h5>Admin</h5>
            </div>
        )
    }
}

export default Toolbar