import React from "react";
import './styles.css';
// import profilePicture from '../static/profile_picture.png';
import PinIcon from '../../Home/MapSelection/Pin/PinIcon'

class Post extends React.Component {

    render() {
        const {content, username="user", time="12:34 pm·Today",} = this.props;

        return (
            <div className="post">

                {/* <div className="iconContainer">
                    <img src={profilePicture} alt="userIcon"/>
                </div> */}

                <div className="post-bar">
                    <p className="post-username"><strong>{username}</strong></p>
                    {/* <p><strong>{age}</strong></p> */}
                    <div className="post-rightBar">
                        <button className="pin_button">
                            <PinIcon />
                        </button>
                        <p>{time}</p>
                    </div>
                </div>

                <div className="postContent">
                    {/* <p><strong>{username}</strong></p> */}
                    <p>{content}</p>
                </div>

            </div>
        );
    }
}

export default Post;
