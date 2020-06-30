import React from "react";
import './styles.css'
import MessageTable from './MessageTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

class UserMessages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { username: "@user1", date: "June 30 2020 11:30:05", city: "Toronto", text: "Consectetur adipiscing" },
                { username: "@user1", date: "June 29 2020 14:44:57", city: "Toronto", text: "Dolor sit amet" },
                { username: "@user1", date: "June 28 2020 13:21:01", city: "Toronto", text: "Lorem Ipsum" },
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
            <div id="message_div">
                <MessageTable state={this.state} usersComponent={this} edit={this.state.edit}></MessageTable>
                <br />
            </div>
        )
    }
}

export default UserMessages