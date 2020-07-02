import React from "react";
import { uid } from "react-uid";
import './styles.css'
import Message from "../../../Message"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class Published extends React.Component {

    render() {
        const publishedMessages = this.props.userMessagesComponent.state.publishedMessages
        const edit = this.props.edit ?  <div id="edit_div" className="text-center">
                                            <button id="trash" className="text-center"><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
                                        </div> : null
        const messageClass = this.props.edit ? "published_post_edit" : "post_div"
        return (
            <div id="published_div">
                {publishedMessages.map(message => (
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

export default Published
