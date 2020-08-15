import React from "react";
import './styles.css'
import {getInfo} from '../../../actions/adminMessagesEdit'
import Pending from './Pending'
import Disapprove from './Pending/Disapprove'
import Published from './Published'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

// Component for displaying all user messages
class UserMessages extends React.Component {

    constructor(props) {
        super(props);
        const messages = getInfo();
        this.state = {
            // For closing and opening tabs
            edit: false,
            pending: false,
            published: false,
            // Switching between styles
            pendingClass: "",
            publishedClass: "",
            // The user messages will be retrieved from a database
            pendingMessages: messages.pendingMessages,
            publishedMessages: messages.publishedMessages,
            // Displaying and styles for the disapprove popup
            disapprove: false,
            disapproveMessage: ""
        }
        this.changePending = this.changePending.bind(this);
        this.changePublished = this.changePublished.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handlePopup = this.handlePopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
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
            <div id="adminUserMessages">
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
