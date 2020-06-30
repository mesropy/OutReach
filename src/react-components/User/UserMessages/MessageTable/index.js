import React from "react";
import './styles.css'
import { uid } from "react-uid";
import Message from '../Message'
import Table from '@material-ui/core/Table'
import TableBody from "@material-ui/core/TableBody";
import { TableHead, TableRow, TableCell } from "@material-ui/core";


class MessageTable extends React.Component {

    render() {
        const { state, messagesComponent, edit } = this.props

        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>User</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>Message</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state.messages.map(message => (
                        <Message key={uid(message)} message={message} messagesComponent={messagesComponent} edit={edit} />
                    ))}
                </TableBody>
            </Table>
        )
    }
}

export default MessageTable