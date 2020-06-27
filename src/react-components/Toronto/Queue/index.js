import React from "react";
import PostAdder from "../PostAdder";
import { addPost } from "../../../actions/addPost";
import PostList from "../PostList";

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

    render() {
        return (
            <div>
                <PostAdder 
                    name={this.state.name}
                    content={this.state.content}
                    handleInputFunc={this.handleInput}
                    addPostFunc={() => addPost(this)}
                />

                <PostList posts={this.state.list} qComponent={this} />
            </div>
        );
    }
}

export default Queue;