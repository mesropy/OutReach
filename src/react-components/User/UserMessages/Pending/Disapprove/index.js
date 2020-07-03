import React from "react";
import { uid } from "react-uid";
import './styles.css'
import Message from "../../../../Message"
import {disapproveMessage} from "../../../../../actions/adminMessagesEdit"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class Disapprove extends React.Component {

    render() {
        const {message, userMessagesComponent, closePopup} = this.props
        return (
            <div id="disapprove_div" className="text-center">
                <div id="icon_div" className="text-right">
                    <button onClick={closePopup}><FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon></button>
                </div>
                <div className="post_div">
                <h4 className="text-center">Are you sure you would like to delete this message?</h4>
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
                <h6 className="text-center">This action cannot be undone</h6>
                <div id="disapprove_buttons" className="text-center">
                    <button id="cancel" onClick={closePopup}>cancel</button>
                    <button id="disapprove" onClick={() => {disapproveMessage.bind(this, userMessagesComponent, message)(); closePopup() }}>
                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>delete
                    </button>
                </div>
            </div>
        )
    }
}

export default Disapprove