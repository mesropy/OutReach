import React from "react";
import { uid } from "react-uid";
import Post from "../Post";

/* Component for the displaying all posts */
class PostList extends React.Component {
    render() {
        const { posts } = this.props;
        return (
            <div>
                <div className="postList">
                    {posts.map(post => (
                        <Post
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

export default PostList;
