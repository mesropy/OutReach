import React from "react";
import { uid } from "react-uid";
import { removeUserMessage } from '../../../../actions/userMessages'
import './styles.css'
import Message from "../../../Message"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class Messages extends React.Component {

    render() {
        const { userLoggedIn, user, edit} = this.props;
        const messageClass = edit ? "published_post_edit" : "post_div"
        if (!userLoggedIn) {
            if (edit) {
                return (
                    <div id="published_div">
                    {user.state.userMessages.map(message => (!userLoggedIn && message.published) ? (
                        <div id="messageContainer" key={uid(message)}>
                            <div className={messageClass}>
                                <Message
                                city={ message.city }
                                key={uid(message)}
                                username={ message.username }
                                public_account={ message.public_account }
                                age={ message.age }
                                time={ message.time }
                                date={ message.date }
                                content={ message.content }
                                published={ message.published }
                                location_name={ message.locationName }
                                pin_left_pos={ message.pinLeftPos }
                                pin_down_pos={ message.pinDownPos }
                                />
                            </div>
                            <div id="edit_div" className="text-center">
                                <button id="trash" className="text-center" onClick={() => {removeUserMessage.bind(user, message)();}}>
                                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                    ) : null
                    )}
                </div>
                )
            }
            return (
                <div id="published_div">
                    {user.state.userMessages.map(message => (!userLoggedIn && message.published) ? (
                        <div id="messageContainer" key={uid(message)}>
                            <div className={messageClass}>
                                <Message
                                city={ message.city }
                                key={uid(message)}
                                username={ message.username }
                                public_account={ message.public_account }
                                age={ message.age }
                                time={ message.time }
                                date={ message.date }
                                content={ message.content }
                                published={ message.published }
                                location_name={ message.locationName }
                                pin_left_pos={ message.pinLeftPos }
                                pin_down_pos={ message.pinDownPos }
                                />
                            </div>
                        </div>
                    ) : null
                    )}
                </div>
            )
        } else {
            if (edit) {
                return (
                    <div id="published_div">
                    {user.state.userMessages.map(message => (
                        <div id="messageContainer" key={uid(message)}>
                            <div className={messageClass}>
                                <Message
                                city={ message.city }
                                key={uid(message)}
                                username={ message.username }
                                public_account={ message.public_account }
                                age={ message.age }
                                time={ message.time }
                                date={ message.date }
                                content={ message.content }
                                published={ message.published }
                                location_name={ message.locationName }
                                pin_left_pos={ message.pinLeftPos }
                                pin_down_pos={ message.pinDownPos }
                                />
                            </div>
                            <div id="edit_div" className="text-center">
                                <button id="trash" className="text-center" onClick={() => {removeUserMessage.bind(user, message)();}}>
                                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                    ))}         
                    </div>
                )
            }
            return (
                <div id="published_div">
                    {user.state.userMessages.map(message => (
                        <div id="messageContainer" key={uid(message)}>
                            <div className={messageClass}>
                                <Message
                                city={ message.city }
                                key={uid(message)}
                                username={ message.username }
                                public_account={ message.public_account }
                                age={ message.age }
                                time={ message.time }
                                date={ message.date }
                                content={ message.content }
                                published={ message.published }
                                location_name={ message.locationName }
                                pin_left_pos={ message.pinLeftPos }
                                pin_down_pos={ message.pinDownPos }
                                />
                            </div>
                        </div>
                    ))}         
                </div>
            )
        }
    }
}

export default Messages
