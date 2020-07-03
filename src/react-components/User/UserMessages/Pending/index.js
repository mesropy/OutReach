import React from "react";
import { uid } from "react-uid";
import './styles.css'
import Message from "../../../Message"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


class Pending extends React.Component {

    render() {
        const {edit, userMessagesComponent, pendingMessages, handlePopup} = this.props
        const messageClass = edit ? "pending_post_edit" : "post_div"
        if (edit) {
            return (
                <div id="pending_div">
                    {pendingMessages.map(message => (
                            <div id="messageContainer" key={uid(message)}>
                                <div className={messageClass}>
                                    <Message
                                    key={uid(message)}
                                    username={message.username}
                                    age={message.age}
                                    time={message.time}
                                    date={message.date}
                                    content={message.content}
                                    location_name={message.locationName}
                                    pin_left_pos={message.pinLeftPos}
                                    pin_down_pos={message.pinDownPos}
                                    />
                                </div>
                                <div id="edit_div" className="text-center" >
                                    <button id="delete" className="text-center" onClick={() => {handlePopup.bind(userMessagesComponent, message)()}}>
                                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            )
        }
        return (
            <div id="pending_div">
                {pendingMessages.map(message => (
                        <div id="messageContainer" key={uid(message)}>
                            <div className={messageClass}>
                            <Message
                                key={uid(message)}
                                username={message.username}
                                age={message.age}
                                time={message.time}
                                date={message.date}
                                content={message.content}
                                location_name={message.locationName}
                                pin_left_pos={message.pinLeftPos}
                                pin_down_pos={message.pinDownPos}
                            />
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Pending
