import React from "react";
import './styles.css';
import {handlePublic} from '../../../actions/userMessages'
import Table from '@material-ui/core/Table';
import TableBody from "@material-ui/core/TableBody";
import { TableRow, TableCell, FormControlLabel } from "@material-ui/core";
import Switch from '@material-ui/core/Switch';

class Settings extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            checked: false
        };
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit() {
        return;
    }

    render() {
        return (
            <div id="user_settings">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                Username
                            </TableCell>
                            <TableCell>
                                {this.props.userPage.username}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Date of Birth
                            </TableCell>
                            <TableCell>
                                {this.props.userPage.dob}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Phone Number
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
