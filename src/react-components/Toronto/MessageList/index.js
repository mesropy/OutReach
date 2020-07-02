import React from "react";
import { uid } from "react-uid";
import Message from "../Message";

import "./styles.css";

// Component to display all posts
class MessageList extends React.Component {
    render() {
        const { posts } = this.props;
        return (
            <div>
                <div id="postList">
                    {posts.map(post => (
                        <Message
                            key={uid(post)}
                            username={post[0]}
                            content={post[1]}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default MessageList;
