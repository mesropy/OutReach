import React from "react";
import './styles.css'
import {TableCell, TableRow, Button} from "@material-ui/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

// Component displaying a row entry for a user
class User extends React.Component {

    render() {
        const {user, handlePopup, edit, parentState} = this.props
        
        const deleteComponent = edit ? <TableCell component="th" scope="row">
                                <Button onClick={handlePopup.bind(parentState, user)}>
                                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                    <h6>delete</h6>
                                </Button>
                            </TableCell> : null
        return (
            <TableRow key={user.username}>
                <TableCell component="th" scope="row">
                    {'@' + user.username}
                </TableCell>
                <TableCell component="th" scope="row">
                    {user.dob}
                </TableCell>
                <TableCell component="th" scope="row">
                    {user.phone}
                </TableCell>
                <TableCell component="th" scope="row">
                    {user.city}
                </TableCell>
                <TableCell component="th" scope="row">
                    {user.public ? "Public" : "Private"}
                </TableCell>
                {deleteComponent}
            </TableRow>
        )
    }
}

export default User
