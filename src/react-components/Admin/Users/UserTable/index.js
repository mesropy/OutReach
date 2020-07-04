import React from "react";
import { uid } from "react-uid";
import './styles.css'
import User from '../User'
import Table from '@material-ui/core/Table'
import TableBody from "@material-ui/core/TableBody";
import { TableHead, TableRow, TableCell } from "@material-ui/core";

// Component that displays the table of all users
class UserTable extends React.Component {
    render() {

        const {state, usersComponent, edit, handlePopup} = this.props

        return (
            <div id="table_container">
                <div id="table_div">
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
                                <User key={uid(user)} user={user} handlePopup={handlePopup} edit={edit} parentState={usersComponent}/>
                            ))}
                        </TableBody>
                    </Table>
                </div>

            </div>
        )
    }
}

export default UserTable
