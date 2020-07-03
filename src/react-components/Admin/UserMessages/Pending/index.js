import React from "react";
import { uid } from "react-uid";
import './styles.css'
import Message from "../../../Message"
import {approveMessage} from "../../../../actions/adminMessagesEdit"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

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
                                      username={ message.username }
                                      age={ message.age }
                                      time={ message.time }
                                      date={ message.date }
                                      content={ message.content }
                                      location_name={ message.locationName }
                                      pin_left_pos={ message.pinLeftPos }
                                      pin_down_pos={ message.pinDownPos }
                                  />
                                </div>
                                <div id="edit_div" className="text-center" >
                                    <button id="approve" className="text-center" onClick={() => {approveMessage.bind(this, userMessagesComponent, message)()}}>
                                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon><p>approve</p>
                                    </button>
                                    <button id="disapprove" className="text-center" onClick={() => {handlePopup.bind(userMessagesComponent, message)()}}>
                                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon><p>disapprove</p>
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
                                    username={ message.username }
                                    age={ message.age }
                                    time={ message.time }
                                    date={ message.date }
                                    content={ message.content }
                                    location_name={ message.locationName }
                                    pin_left_pos={ message.pinLeftPos }
                                    pin_down_pos={ message.pinDownPos }
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
