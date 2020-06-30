import React from "react";
import './styles.css'
import UserTable from './UserTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [
                {username: "@amy", age: "10yrs", city: "Toronto"},
                {username: "@brian", age: "-", city: "Toronto"},
                {username: "@lily", age: "15yrs", city: "Paris"},
            ],
            edit: false
        }
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit(e) {
        const toggle = this.state.edit
        this.setState({
            edit: !toggle
        })
    }

    render() {
        return (
            <div id="users_div">
                <div id="edit_div" className="text-right">
                    <button onClick={this.handleEdit}>
                        <h6>Edit</h6>
                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                    </button>
                </div>
                <UserTable state={this.state} usersComponent={this} edit={this.state.edit}></UserTable>
                <br/>
            </div>
        )
    }
}

export default Users