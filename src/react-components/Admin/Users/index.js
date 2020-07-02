import React from "react";
import './styles.css'
import UserTable from './UserTable'
import DeleteUser from "./DeleteUser"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [
                {username: "@amy", age: "10yrs", city: "Toronto"},
                {username: "@brian", age: "-", city: "Paris"},
                {username: "@lily", age: "15yrs", city: "Toronto"},
            ],
            edit: false,
            delete: false,
            userDelete: ""
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handlePopup = this.handlePopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    handleEdit(e) {
        const toggle = this.state.edit
        this.setState({
            edit: !toggle
        })
    }

    handlePopup(user) {
        this.setState({
            edit: false,
            delete: true,
            userDelete: user
        })
    }

    closePopup() {
        this.setState({
            edit: true,
            delete: false,
            userDelete: ""
        })
    }

    render() {
        if (this.state.edit) {
            return (
                <div id="users_div">
                    <div id="edit_div" className="text-right">
                        <button onClick={this.handleEdit}>
                            <h6>Done</h6>
                        </button>
                    </div>
                    <UserTable state={this.state} usersComponent={this} edit={this.state.edit} handlePopup={this.handlePopup}></UserTable>
                </div>
            )
        }
        else if (this.state.delete) {
            return (
                <DeleteUser
                    user={this.state.userDelete}
                    usersComponent={this}
                    closePopup={this.closePopup}
                />
            )
        }
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