import React from "react";
import { uid } from "react-uid";
import './styles.css'
import Post from "../../../Toronto/Post"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class Published extends React.Component {

    render() {
        const publishedMessages = this.props.userMessagesComponent.state.publishedMessages
        const edit = this.props.edit ?  <div id="edit_div" className="text-center">
                                            <button id="trash" className="text-center"><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
                                        </div> : null
        const postClass = this.props.edit ? "published_post_edit" : "post_div"
        return (
            <div id="published_div">
                {publishedMessages.map(post => (
                        <div id="messageContainer">
                            <div className={postClass}>
                                <Post
                                    key={uid(post)}
                                    username={post[0]}
                                    content={post[1]}
                                />
                            </div>
                            {edit}
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Published