import React from "react";
import { TableCell, TableRow, Button } from "@material-ui/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class Message extends React.Component {

    render() {
        const { message, usersComponent, edit } = this.props

        
        return (
            <TableRow key={message.date}>
                <TableCell component="th" scope="row">
                    {message.username}
                </TableCell>
                <TableCell component="th" scope="row">
                    {message.date}
                </TableCell>
                <TableCell component="th" scope="row">
                    {message.city}
                </TableCell>
                <TableCell component="th" scope="row">
                    {message.text}
                </TableCell>
            </TableRow>
            )
        
    }
}

export default Message