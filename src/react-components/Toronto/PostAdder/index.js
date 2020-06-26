import React from "react";
import { Button, TextField } from "@material-ui/core";
import './styles.css';
// import PostList from "../PostList";

class Popup extends React.Component {

  addPost = event => {
    // let posts = this.props.list;
    // const username = this.props.name;
    // const content = this.props.content;
    // const newPost = [username, content];
    // posts.push(newPost)
    // this.setState({
    //   list: posts
    // });
  };

  handleInput = event => {
    // const newContent = event.target.value;
    // this.setState({
    //   content: newContent
    // });
// console.log(newContent);
  };

  handleSubmit = event => {
    this.props.closePopup();
    this.addPost(this);
  };

  render() {

    // const {name, content, list, closePopup} = this.props;
    
    return(
      <div className="popupWindow">
        <h3>{this.props.title}</h3>

        <TextField 
          className="TextEntry"
          // id="outlined-multiline-static"
          // label="Multiline"
          multiline
          rows={12}
          defaultValue="Share your thoughts"
          fullWidth={true}
          variant="outlined"
          onChange={this.handleInput}
        />

        <Button variant="outlined" onClick={this.props.closePopup}>Cancel</Button>
        <Button variant="outlined" onClick={this.props.closePopup}>Set Location</Button>
        <Button variant="outlined" onClick={this.handleSubmit}>Post</Button>
      </div>
    );
  }
}

class PostAdder extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  toggle() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    // const {name, content, list} = this.props;
    return (
      <div>
        <Button id="addBtn" variant="contained" onClick={this.toggle.bind(this)}>ADD</Button>

        {this.state.show ? 
          <Popup
            title="New Message"
            closePopup={this.toggle.bind(this)}
            // name={name}
            // content={content}
            // list={list}
          />
          : null
        }
      </div>
    );
  }
};

export default PostAdder;