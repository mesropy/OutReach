import React from "react";
import {TableCell, TableRow, Button} from "@material-ui/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class Message extends React.Component {


    render() {
        const {message, messagesComponent} = this.props
        {
            return (
                <TableRow key={message.username}>
                    <TableCell component="th" scope="row">
                        {message.username}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {message.date}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {message.text}
                    </TableCell>
                </TableRow>
            )
        }
    }
}

export default Message
