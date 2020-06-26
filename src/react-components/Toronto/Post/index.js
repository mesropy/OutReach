import React from "react";
import './styles.css';
import profilePicture from '../static/profile_picture.png';

class Post extends React.Component {

    render() {
        const {content, username="user"} = this.props;

        return (
            <div className="post">

                <div className="iconContainer">
                    <img src={profilePicture} alt="userIcon"/>
                </div>

                <div className="postContent">
                    <p><strong>{username}</strong></p>
                    <p>{content}</p>
                </div>

            </div>
        );
    }
}

export default Post;
