import React from "react";
import { uid } from "react-uid";
import Message from "./../../../Message";

import "./styles.css";

// Component to display all posts
class MessageList extends React.Component {
    render() {
        const { messages } = this.props;
        return (
            <div id="messageList">
                {messages.map(message => (
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
                ))}
            </div>
        );
    }
}

export default MessageList;
