import React from "react";
import './styles.css'
import MessageTable from './MessageTable'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faEdit } from '@fortawesome/free-solid-svg-icons'

class Messages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { username: "@user1", date: "July 2, 2020", text: "consectetur adipiscing"},
                { username: "@user1", date: "July 1, 2020", text: "dolor sit amet"},
                { username: "@user1", date: "June 15, 2020", text: "Lorem Ipsum"},
            ],
        }
    }

    render() {
        return (
            <div id="messages_div">
                <MessageTable state={this.state} messagesComponent={this}></MessageTable>
                <br/>
            </div>
        )
    }
}

export default Messages