import React from "react";
import { uid } from "react-uid";
import './styles.css'
import {removePublishedMessage} from '../../../../actions/adminMessagesEdit'
import Message from "../../../Message"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class Published extends React.Component {

    render() {
        const { userMessagesComponent, edit, publishedMessages } = this.props;
        const messageClass = edit ? "published_post_edit" : "post_div"
        if (edit) {
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
                            <div id="edit_div" className="text-center">
                                <button id="trash" className="text-center" onClick={ () => {removePublishedMessage.bind(this, userMessagesComponent, message)()}}>
                                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
        else {
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
                            </div>
                        ))}
                </div>
            )
        }
    }
}

export default Published
