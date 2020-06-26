import React from "react";
import {TableCell, TableRow, Button} from "@material-ui/core"

class User extends React.Component {


    render() {
        const {user, removeUser} = this.props

        return (
            <TableRow key={user.username}>
                <TableCell component="th" scope="row">
                    {user.username}
                </TableCell>
                <TableCell component="th" scope="row">
                    <Button
                        onClick={
                        /* Remove button onClick binds the user as the parameter to the remove function. */
                        () => removeUser(user)
                        }
                    >
                        remove
                    </Button>
                </TableCell>
            </TableRow>
        )
    }
}

export default User
