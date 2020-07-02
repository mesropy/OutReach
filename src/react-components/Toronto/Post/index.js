import React from "react";
import './styles.css';
import PinIcon from '../../Home/MapSelection/Pin/PinIcon'

class Post extends React.Component {

    render() {
        const {content, username="user", time="12:34 pm · Today", age="19 yrs old"} = this.props;

        return (
            <div className="post">

                <div className="post-bar">
                    <p className="post-username">
                        <strong>{username}</strong>
                        {age}
                    </p>
                    <div className="post-rightBar">
                        <button className="pin_button">
                            <PinIcon />
                        </button>
                        <p>{time}</p>
                    </div>
                </div>

                <div className="postContent">
                    <p>{content}</p>
                </div>

            </div>
        );
    }
}

export default Post;
