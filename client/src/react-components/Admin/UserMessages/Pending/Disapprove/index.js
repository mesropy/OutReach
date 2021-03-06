import React from "react";
import { uid } from "react-uid";
import './styles.css'
import Message from "../../../../Message"
import {disapproveMessage} from "../../../../../actions/adminMessagesEdit"
import { Backdrop } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

// Component for displaying the disapprove popup
class Disapprove extends React.Component {

    render() {
        const {message, userMessagesComponent, closePopup} = this.props
        return (
            <div>
              <Backdrop open={true} onClick={closePopup}></Backdrop>
              <div id="disapprove_div" className="text-center">
                  <div id="icon_div" className="text-right">
                      <button onClick={closePopup}><FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon></button>
                  </div>
                  <div className="post_div">
                  <h4>Are you sure you would like to disapprove this message?</h4>
                    <Message
                        city={ message.city }
                        key={uid(message)}
                        username={ message.username }
                        age={ message.age }
                        time={ message.time }
                        date={ message.date }
                        content={ message.content }
                        location_name={ message.locationName }
                        pin_left_pos={ message.pinLeftPos }
                        pin_down_pos={ message.pinDownPos }
                    />
                  </div>
                  <h6 className="text-center">This action cannot be undone</h6>
                  <div id="disapprove_buttons" className="text-center">
                      <button id="cancel" onClick={closePopup}>cancel</button>
                      <button id="disapprove" onClick={() => {disapproveMessage.bind(this, userMessagesComponent, message)(); closePopup() }}>
                          <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>disapprove
                      </button>
                  </div>
              </div>
            </div>
        )
    }
}

export default Disapprove
