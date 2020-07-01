import React from "react";
import PostAdder from "../PostAdder";
import { addPost } from "../../../actions/addPost";
import PostList from "../PostList";

// Component to store messages
class Queue extends React.Component {
    state = {
        name: "user",
        content: "",
        time: "12:34 pm·Today",
        list: [
            ["user", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget maximus massa. Vestibulum hendrerit nec urna eu elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vehicula turpis vitae eros convallis, suscipit lobortis neque vestibulum. Morbi ac augue at nisl porttitor varius. Suspendisse elementum tincidunt ullamcorper. Fusce mi arcu, vehicula in facilisis sit amet, eleifend ut sem. Aenean volutpat feugiat nulla vel egestas."]
        ]
    };

    handleInput = event => {
        const newContent = event.target.value;
        this.setState({
            content: newContent
        });
    };

    cleanContent = () => {
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