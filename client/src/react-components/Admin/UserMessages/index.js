import React from "react";
import './styles.css'
import Pending from './Pending'
import Disapprove from './Pending/Disapprove'
import Published from './Published'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

// Component for displaying all user messages
class UserMessages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // For closing and opening tabs
            edit: false,
            pending: false,
            published: false,
            // Switching between styles
            pendingClass: "",
            publishedClass: "",
            // The user messages will be retrieved from a database
            pendingMessages: [],
            publishedMessages: [],
            // Displaying and styles for the disapprove popup
            disapprove: false,
            disapproveMessage: ""
        }
        this.changePending = this.changePending.bind(this);
        this.changePublished = this.changePublished.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handlePopup = this.handlePopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.getInfo = this.getInfo.bind(this);
        this.getInfo();
    }

    getInfo() {
        const url = '/message'

        const newPendingMessages = []
        const newPublishedMessages = []

        // Get all Messages
        fetch(url).then(message => {
            if (message.status === 200) {
                return message.json();
            } else {
                console.log("Couldn't get messages.")
                return []
            }
        }).then(json => {
            // Add each message to the appropriate list
            json.forEach(message => {
                // Get the author
                fetch('/user/' + message.author).then(user => {
                    if (user.status !== 200) {
                        console.log("Couldn't get user")
                        return null;
                    } else {
                        return user.json()
                    }
                }).then(data => {
                    if (data === null) {
                        return ;
                    }
                    if (message.published) {
                        newPublishedMessages.push({
                            _id: message._id,
                            username: data.username, 
                            age: "20", 
                            time: "8:30am", 
                            date: "Jul 8", 
                            content: message.text, 
                            locationName: message.location.name, 
                            pinLeftPos: message.location.x, 
                            pinDownPos: message.location.y
                        })
                    } else {
                        newPendingMessages.push({
                            _id: message._id,
                            username: data.username, 
                            age: "20", 
                            time: "8:30am", 
                            date: "Jul 8", 
                            content: message.text, 
                            locationName: message.location.name, 
                            pinLeftPos: message.location.x, 
                            pinDownPos: message.location.y
                        })
                    }
                }).catch(error => {
                    console.log(error)
                })
            })
        })
        .catch(error => {
            console.log(error)
        })

        this.state.pendingMessages = newPendingMessages;
        this.state.publishedMessages = newPublishedMessages
    }


    // Change styles for the pending tab
    changePending() {
        const pendingClass = this.state.pendingClass === "" ? "highlighted" : ""
        const toggle = this.state.pending
        this.setState({
            edit: false,
            pending: !toggle,
            published: false,
            pendingClass: pendingClass,
            publishedClass: ""
        })
    }

    // Change styles for the published tab
    changePublished() {
        const publishedClass = this.state.publishedClass === "" ? "highlighted" : ""
        const toggle = this.state.published
        this.setState({
            edit: false,
            pending: false,
            published: !toggle,
            pendingClass: "",
            publishedClass: publishedClass
        })
    }

    // Switch to edit mode
    handleEdit() {
        const toggle = this.state.edit;
        this.setState({
            edit: !toggle,
        })
    }

    // Display the "disapprove" component
    handlePopup(message) {
        this.setState({
            disapprove: true,
            disapproveMessage: message
        })
    }

    // Close the "disapprove" component
    closePopup() {
        this.setState({
            disapprove: false
        })
    }

    render() {
        if (this.state.disapprove) {
            return (
                <div>
                    <Disapprove
                        message={this.state.disapproveMessage}
                        userMessagesComponent={this}
                        closePopup={this.closePopup}
                    />
                </div>
            )
        }

        const edit = this.state.edit ? <button id="done_button" onClick={this.handleEdit}>
                                        <h6 id="done">Done</h6>
                                     </button> :
                                     <button id="edit_button" onClick={this.handleEdit}>
                                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon><h6>Edit</h6>
                                     </button>
        let messages = null;
        if (this.state.pending) {
            messages = <Pending userMessagesComponent={this} edit={this.state.edit} pendingMessages={this.state.pendingMessages} handlePopup={this.handlePopup}/>
        }
        if (this.state.published) {
            messages = <Published userMessagesComponent={this} edit={this.state.edit} publishedMessages={this.state.publishedMessages}/>
        }
        return (
            <div id="userMessages">
                <div id="headers">
                    <button id="pending" className={this.state.pendingClass} onClick={this.changePending}>Pending</button>
                    <button id="published" className={this.state.publishedClass} onClick={this.changePublished}>Published</button>
                    {edit}
                </div>
                {messages}
                <br/><br/>
            </div>
        )
    }
}

export default UserMessages
