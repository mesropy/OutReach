import React from "react";
import { uid } from "react-uid";
import Message from "./../../Message";

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
                        username={message[0]}
                        content={message[1]}
                    />
                ))}
            </div>
        );
    }
}

export default MessageList;
