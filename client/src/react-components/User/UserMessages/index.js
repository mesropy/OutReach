import React from "react";
import './styles.css'
import Messages from './Messages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

class UserMessages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
        }
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit() {
        const toggle = this.state.edit;
        this.setState({
            edit: !toggle,
        })
    }

    render() {

        const { userLoggedIn } = this.props
        const messages = <Messages userLoggedIn={userLoggedIn} user={this.props.user} edit={this.state.edit}/>
        let edit;
        if (!userLoggedIn) {
            edit = null;
        } else {
            edit = this.state.edit ? <button id="done_button" onClick={this.handleEdit}>
                                            <h6 id="done">Done</h6>
                                        </button> :
                                        <button id="edit_button" onClick={this.handleEdit}>
                                            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon><h6>Edit</h6>
                                        </button>
        }
        return (
            <div id="userMessages">
                <div id="headers">
                    {edit}
                </div>
                {messages}
                <br/><br/>
            </div>
        )
    }
}

export default UserMessages