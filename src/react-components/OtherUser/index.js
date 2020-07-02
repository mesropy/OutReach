import React from "react";
import Topbar from "./Topbar"
import Messages from './Messages'

import '../main_styles.css';

class OtherUser extends React.Component {
        render() {
            return (
                <div>
                    <Topbar/>
                    <Messages/>
                </div>
            )
        };
}

export default OtherUser