import React from "react";
import { uid } from "react-uid";
import './styles.css'
import {removePublishedMessage} from '../../../../actions/adminMessagesEdit'
import Message from "../../../Message"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

// Component for displaying the published user messages
class Published extends React.Component {

    render() {
        const { userMessagesComponent, edit, publishedMessages } = this.props;
        const messageClass = edit ? "published_post_edit" : "post_div"
        // Editing Mode
        if (edit) {
            return (
                <div id="published_div">
                {publishedMessages.map(message => (
                        <div id="messageContainer" key={uid(message)}>
                            <div className={messageClass}>
                            <Message
                                key={uid(message)}
                                username={ message.username }
                                age={ message.age }
                                time={ message.time }
                                date={ message.date }
                                content={ message.content }
                                location_name={ message.locationName }
                                pin_left_pos={ message.pinLeftPos }
                                pin_down_pos={ message.pinDownPos }
                                public_account={ message.public_account }
                                published={ message.published }
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
        // Normal Mode
        else {
            return (
                <div id="published_div">
                    {publishedMessages.map(message => (
                            <div id="messageContainer" key={uid(message)}>
                                <div className={messageClass}>
                                    <Message
                                        key={uid(message)}
                                        username={ message.username }
                                        age={ message.age }
                                        time={ message.time }
                                        date={ message.date }
                                        content={ message.content }
                                        location_name={ message.locationName }
                                        pin_left_pos={ message.pinLeftPos }
                                        pin_down_pos={ message.pinDownPos }
                                        public_account={ message.public_account }
                                        published={ message.published }
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
