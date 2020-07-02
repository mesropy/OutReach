import React from "react";
import { uid } from "react-uid";
import './styles.css'
import Message from "../../../Message"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

class Pending extends React.Component {

    render() {
        const pendingMessages = this.props.userMessagesComponent.state.pendingMessages
        const edit = this.props.edit ?  <div id="edit_div" className="text-center">
                                            <button id="approve" className="text-center"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon><p>approve</p></button>
                                            <button id="disapprove" className="text-center"><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon><p>disapprove</p></button>
                                        </div> : null
        const messageClass = this.props.edit ? "pending_post_edit" : "post_div"
        return (
            <div id="pending_div">
                {pendingMessages.map(message => (
                        <div id="messageContainer">
                            <div className={messageClass}>
                                <Message
                                    key={uid(message)}
                                    username={message[0]}
                                    content={message[1]}
                                />
                            </div>
                            {edit}
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Pending
