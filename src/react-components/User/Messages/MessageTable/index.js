import React from "react";
import { uid } from "react-uid";
import './styles.css'
import Message from '../Message'
import Table from '@material-ui/core/Table'
import TableBody from "@material-ui/core/TableBody";
import { TableHead, TableRow, TableCell } from "@material-ui/core";

class MessageTable extends React.Component {

    render() {

        const {state, messagesComponent} = this.props

        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>User</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Text</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state.messages.map(message => (
                        <Message key={uid(message)} message={message} messagesComponent={messagesComponent}/>
                    ))}
                </TableBody>
            </Table>
        )
    }
}

export default MessageTable
