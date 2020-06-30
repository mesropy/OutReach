import React from "react";
import {removeUser} from "../../../../actions/adminEdit"
import {TableCell, TableRow, Button} from "@material-ui/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class User extends React.Component {


    render() {
        const {user, usersComponent, edit} = this.props
        
        if (edit) {
            return (
                <TableRow key={user.username}>
                    <TableCell component="th" scope="row">
                        {user.username}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {user.age}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {user.city}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        <Button onClick={removeUser.bind(this, usersComponent, user)}>
                            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                        </Button>
                    </TableCell>
                </TableRow>
            )
        }
        else {
            return (
                <TableRow key={user.username}>
                    <TableCell component="th" scope="row">
                        {user.username}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {user.age}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {user.city}
                    </TableCell>
                </TableRow>
            )
        }
    }
}

export default User
