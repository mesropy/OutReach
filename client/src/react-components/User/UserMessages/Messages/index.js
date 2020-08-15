import React from "react";
import { uid } from "react-uid";
import './styles.css'
import Message from "../../../Message"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class Messages extends React.Component {

    render() {

        const { userLoggedIn, userMessages, edit} = this.props;
        const messageClass = edit ? "published_post_edit" : "post_div"
        const editComponent = edit ? <div id="edit_div" className="text-center">
                                        <button id="trash" className="text-center" onClick={() => {}}>
                                                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                        </button>
                                    </div> : null
        if (!userLoggedIn) {
            return (
                <div id="published_div">
                {userMessages.map(message => message.published ? (
                    <div id="messageContainer" key={uid(message)}>
                        <div className={messageClass}>
                            <Message
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
                        {editComponent}
                    </div>
                ) : null
                )}
                </div>
            )
        } else {
            return (
                <div id="published_div">
                {console.log(userMessages)}
                {userMessages.map(message => (
                    <div id="messageContainer" key={uid(message)}>
                        <div className={messageClass}>
                            <Message
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
                        {editComponent}
                    </div>
                ))}         
                </div>
            )
        }
    }
}

export default Messages
