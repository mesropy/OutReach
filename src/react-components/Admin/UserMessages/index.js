import React from "react";
import './styles.css'

class UserMessages extends React.Component {

    render() {
        return (
            <div id="userMessages">
                <div id="headers">
                    <button id="pending">Pending</button>
                    <button id="published">Published</button>
                </div>
            </div>
        )
    }
}

export default UserMessages