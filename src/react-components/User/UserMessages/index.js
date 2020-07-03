import React from "react";
import './styles.css'
import Pending from './Pending'
import Disapprove from './Pending/Disapprove'
import Published from './Published'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

class UserMessages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            pending: true,
            published: false,
            pendingClass: "highlighted",
            publishedClass: "",
            pendingMessages: [
                [props.username, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus viverra vitae congue eu consequat. Lacinia at quis risus sed vulputate odio. Gravida dictum fusce ut placerat orci nulla. Amet commodo nulla facilisi nullam vehicula ipsum a. Habitant morbi tristique senectus et netus et malesuada fames. In eu mi bibendum neque egestas. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Arcu vitae elementum curabitur vitae nunc sed. Cras semper auctor neque vitae tempus quam. Adipiscing tristique risus nec feugiat in fermentum posuere urna."],
                [props.username, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus viverra vitae congue eu consequat. "]
            ],
            publishedMessages: [
                [props.username, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus viverra vitae congue eu consequat. Lacinia at quis risus sed vulputate odio. Gravida dictum fusce ut placerat orci nulla. Amet commodo nulla facilisi nullam vehicula ipsum a. Habitant morbi tristique senectus et netus et malesuada fames. In eu mi bibendum neque egestas. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Arcu vitae elementum curabitur vitae nunc sed. Cras semper auctor neque vitae tempus quam. Adipiscing tristique risus nec feugiat in fermentum posuere urna."]
                , [props.username, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus viverra vitae congue eu consequat. Lacinia at quis risus sed vulputate odio. Gravida dictum fusce ut placerat orci nulla. Amet commodo nulla facilisi nullam vehicula ipsum a. Habitant morbi tristique senectus et netus et malesuada fames. In eu mi bibendum neque egestas. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Arcu vitae elementum curabitur vitae nunc sed. Cras semper auctor neque vitae tempus quam. Adipiscing tristique risus nec feugiat in fermentum posuere urna."]

            ],
            disapprove: false,
            disapproveMessage: ""
        }
        this.changePending = this.changePending.bind(this);
        this.changePublished = this.changePublished.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handlePopup = this.handlePopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

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

    handleEdit() {
        const toggle = this.state.edit;
        this.setState({
            edit: !toggle,
        })
    }
    
    handlePopup(message) {
        this.setState({
            disapprove: true,
            disapproveMessage: message
        })
    }

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
            messages = <Pending userMessagesComponent={this} edit={this.state.edit} pendingMessages={this.state.pendingMessages} handlePopup={this.handlePopup} />
        }
        if (this.state.published) {
            messages = <Published userMessagesComponent={this} edit={this.state.edit} publishedMessages={this.state.publishedMessages} handlePopup={this.handlePopup}/>
        }
        if (!this.props.userLoggedIn) { 
            messages = <Published userMessagesComponent={this} edit={this.state.edit} publishedMessages={this.state.publishedMessages}/>
        }

        if (!this.props.userLoggedIn) { 
            return (
                <div id="userMessages">
                    {messages}
                    <br /><br />
                </div>
            );
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