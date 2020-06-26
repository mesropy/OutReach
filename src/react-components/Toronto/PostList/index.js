import React from "react";
import { uid } from "react-uid";
import Post from "../Post";
import PostAdder from "../PostAdder";

/* Component for the list of posts */
class PostList extends React.Component {
    render() {
        const { posts } = this.props;
        const list = posts;
        return (
            <div>
                <PostAdder/>
                        {/* // name={this.state.name}
                        // content={this.state.content}
                        // list={this.state.list}} */}
                        
                <div className="postList">
                    {list.map(post => (
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
