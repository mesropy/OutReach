import React from "react";
import './styles.css'
import UserTable from './UserTable'
import DeleteUser from "./DeleteUser"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

// Component for displaying all users
class Users extends React.Component {

    constructor(props) {
        super(props);
        // The users will be retrieved from a database
        this.state = {
            users: [
            ],
            // Used for switching between Edit and Normal modes
            edit: false,
            // For deletion
            delete: false,
            userDelete: ""
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handlePopup = this.handlePopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.getInfo = this.getInfo.bind(this);
        this.getInfo();
    }

    // Sets Edit Mode
    handleEdit(e) {
        const toggle = this.state.edit
        this.setState({
            edit: !toggle
        })
    }

    // Displays the deletion component
    handlePopup(user) {
        this.setState({
            edit: false,
            delete: true,
            userDelete: user
        })
    }

    // Closes the deletion popup
    closePopup() {
        this.setState({
            edit: true,
            delete: false,
            userDelete: ""
        })
    }

    getInfo() {
        const url = '/user'

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

    render() {
        // Edit Mode
        if (this.state.edit) {
            return (
                <div id="users_div">
                    <div id="edit_div" className="text-right">
                        <button onClick={this.handleEdit}>
                            <h6 className="edit_done">Done</h6>
                        </button>
                    </div>
                    <UserTable state={this.state} usersComponent={this} edit={this.state.edit} handlePopup={this.handlePopup}></UserTable>
                </div>
            )
        }
        // Deletion Popup
        else if (this.state.delete) {
            return (
                <DeleteUser
                    user={this.state.userDelete}
                    usersComponent={this}
                    closePopup={this.closePopup}
                />
            )
        }
        // Normal Mode
        else {
        return (
                <div id="users_div">
                    <div id="edit_div" className="text-right">
                        <button onClick={this.handleEdit}>
                            <h6>Edit</h6>
                            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                        </button>
                    </div>
                    <UserTable state={this.state} usersComponent={this} edit={this.state.edit}></UserTable>
                </div>
            )
        }
    }
}

export default Users