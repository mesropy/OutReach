import React from "react";
import { uid } from "react-uid";
import './styles.css'
import User from './User'
import Table from '@material-ui/core/Table'
import TableBody from "@material-ui/core/TableBody";

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [
                {username: "Amy"},
                {username: "Brian"}
            ]
        }
        this.removeUser = this.removeUser.bind(this);
    }

    removeUser = (user) => {
        const filteredUsers = this.state.users.filter(u => {
            return u !== user;
        });

        this.setState({
            users: filteredUsers
        });
    }

    render() {
        return (
            <div id="users_div">
                <h3 className="text-center">Users</h3>
                <Table>
                    <TableBody>
                        {this.state.users.map(user => (
                            <User key={uid(user)} user={user} removeUser={this.removeUser}/>
                        ))}
                    </TableBody>
                </Table><br/>
            </div>
        )
    }
}

export default Users