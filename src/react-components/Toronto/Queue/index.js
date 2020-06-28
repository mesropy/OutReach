import React from "react";
import PostAdder from "../PostAdder";
import { addPost } from "../../../actions/addPost";
import PostList from "../PostList";

// Component to store messages
class Queue extends React.Component {
    state = {
        name: "user",
        content: "",
        list: [
            ["user", "I am graduating in a few months. Worried about job market under covid :("]
        ]
    };

    handleInput = event => {
        const newContent = event.target.value;
        this.setState({
            content: newContent
        });
    };

    cleanContent = () => {
        console.log(this.state.list);
        this.setState({
            content: ""
        });
    }

    render() {
        return (
            <div>
                <PostAdder
                    name={this.state.name}
                    content={this.state.content}
                    handleInputFunc={this.handleInput}
                    addPostFunc={() => addPost(this)}
                    cleanFunc={this.cleanContent}
                />

                <PostList posts={this.state.list} />
            </div>
        );
    }
}

export default Queue;