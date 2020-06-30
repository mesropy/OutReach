import React from "react";
import { uid } from "react-uid";
import './styles.css'
import User from '../User'
import Table from '@material-ui/core/Table'
import TableBody from "@material-ui/core/TableBody";
import { TableHead, TableRow, TableCell } from "@material-ui/core";

class UserTable extends React.Component {

    render() {

        const {state, usersComponent, edit} = this.props

        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>User</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>City</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state.users.map(user => (
                        <User key={uid(user)} user={user} usersComponent={usersComponent} edit={edit}/>
                    ))}
                </TableBody>
            </Table>
        )
    }
}

export default UserTable
