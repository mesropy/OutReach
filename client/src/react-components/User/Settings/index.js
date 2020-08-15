import React from "react";
import './styles.css';
import ChangePassword from './ChangePassword'
import {handlePublic, changeUsername, changeDOB} from '../../../actions/userSettings'
import Table from '@material-ui/core/Table';
import TableBody from "@material-ui/core/TableBody";
import { TableRow, TableCell, FormControlLabel, Switch, TextField, } from "@material-ui/core";
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faCheck } from '@fortawesome/free-solid-svg-icons'

class Settings extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            editUsername: false,
            newUsername: "",
            editDOB: false,
            newDOB: this.props.userPage.dob,
            changePass: false
        };
        this.handleEditUsername = this.handleEditUsername.bind(this);
        this.handleEditDOB = this.handleEditDOB.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
    }

    handleEditUsername() {
        const toggle = this.state.editUsername;
        this.setState({
            editUsername: !toggle,
            editDOB: false,
            changePass: false
        })
    }

    handleEditDOB() {
        const toggle = this.state.editDOB;
        this.setState({
            editUsername: false,
            editDOB: !toggle,
            changePass: false
        })
    }

    handleInput = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleDateChange(date) {
        this.setState({
            newDOB: date
        })
    }

    handleChangePass() {
        const toggle = this.state.changePass;
        this.setState({
            editDOB: false,
            editUsername: false,
            changePass: !toggle
        })
    }

    render() {
        if (this.state.changePass) {
            return <ChangePassword userComponent={this.props.user} parentState={this} userPage={this.props.userPage}></ChangePassword>
        }

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
                                {this.state.editDOB ?
                                <TableCell>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Date picker dialog"
                                        format="yyyy-MM-dd"
                                        value={this.state.newDOB}
                                        onChange={this.handleDateChange}
                                        KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                        }}
                                        />
                                    </MuiPickersUtilsProvider>
                                    <button id="confirmDOB" className="text-center" onClick={() => {
                                        if (changeDOB.bind(this.props.user, this.props.userPage, this.state.newDOB)()) {
                                            this.handleEditDOB()
                                        }
                                    }}>
                                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                    </button>
                                </TableCell> : 
                                <TableCell>
                                    {this.props.userPage.dob}
                                    <button id="editDOB" className="text-center" onClick={this.handleEditDOB}>
                                        <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                                    </button>
                                </TableCell>
                                }
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
                            <button id="changePasswordButton" className="text-center" onClick={this.handleChangePass}>
                                Change Password
                            </button>
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
                            Toggle Public if you want your profile page to be visible by others.
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default Settings
