import React from "react";
import './styles.css'
import {removeUser} from "../../../../actions/adminUserEdit"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

// Component for displaying the popup for deleting a user
class DeleteUser extends React.Component {

    render() {
        const {user, usersComponent, closePopup} = this.props
        return (
            <div id="delete_div">
                <div id="icon_div" className="text-right">
                    <button onClick={closePopup}><FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon></button>
                </div>
                <h3 className="text-center">Are you sure you would like to delete the user <strong>{user.username}</strong>?</h3>
                <h5 className="text-center">this action cannot be undone</h5><br/>
                <div id="delete_buttons" className="text-center">
                    <button id="cancel" onClick={closePopup}>cancel</button>
                    <button id="delete" onClick={() => {removeUser.bind(this, usersComponent, user)(); closePopup() }}>
                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>delete
                    </button>
                </div>
            </div>
        )
    }
}

export default DeleteUser