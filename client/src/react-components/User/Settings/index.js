import React from "react";
import './styles.css';
import {handlePublic, changeUsername} from '../../../actions/userMessages'
import Table from '@material-ui/core/Table';
import TableBody from "@material-ui/core/TableBody";
import { TableRow, TableCell, FormControlLabel, Switch, TextField } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faCheck } from '@fortawesome/free-solid-svg-icons'

class Settings extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            editUsername: false,
            newUsername: "",
            editDOB: false
        };
        this.handleEditUsername = this.handleEditUsername.bind(this);
        this.handleInput = this.handleInput.bind(this)
    }

    handleEditUsername() {
        const toggle = this.state.editUsername;
        this.setState({
            editUsername: !toggle,
            editDOB: false
        })
    }

    handleInput = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div id="user_settings">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                Username:
                            </TableCell>
                                {this.state.editUsername ?
                                <TableCell>
                                    <TextField
                                        placeholder="New Username"
                                        variant="outlined"
                                        name="newUsername"
                                        onChange={this.handleInput}
                                    /> 
                                    <button id="confirmUsername" className="text-center" onClick={() => {
                                        if (changeUsername.bind(this.props.user, this.props.userPage, this.state.newUsername, this.props.user.props.global)()) {
                                            this.handleEditUsername()
                                        }
                                    }}>
                                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                    </button>
                                </TableCell>
                                : 
                                <TableCell>
                                    {this.props.userPage.username}
                                    <button id="editUsername" className="text-center" onClick={this.handleEditUsername}>
                                        <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                                    </button>
                                </TableCell>
                                }
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Date of Birth:
                            </TableCell>
                            <TableCell>
                                {this.props.userPage.dob}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Phone Number:
                            </TableCell>
                            <TableCell>
                                {this.props.userPage.phone}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            Change Password
                        </TableRow>
                        <TableRow>
                            <FormControlLabel control={
                            <Switch
                                checked={this.props.userPage.public}
                                onChange={handlePublic.bind(this.props.user, this.props.userPage)}
                                name={this.props.userPage.username}
                                color="primary"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />} label={this.props.userPage.public ? "Public" : "Private"}/>
                        </TableRow>
                        <TableRow>
                            (Message explaining what this means)
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default Settings
