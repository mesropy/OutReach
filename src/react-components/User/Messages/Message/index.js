import React from "react";
import {TableCell, TableRow} from "@material-ui/core"

class Message extends React.Component {


    render() {
        const {message} = this.props
        
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

export default Message
