import React from "react";
import './styles.css';
import Table from '@material-ui/core/Table';
import TableBody from "@material-ui/core/TableBody";
import { TableRow, TableCell, FormControlLabel } from "@material-ui/core";
import Switch from '@material-ui/core/Switch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

class Settings extends React.Component {
    super(props) {
        this.state = {
            checked: false
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.toggleChecked = this.toggleChecked(this);
    }

    handleEdit() {
        return;
    }

    toggleChecked() {
        return;
    }
    render() {
        return (
            <div>
                <h1>Settings Lorem ipsum</h1>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                Age:
                            </TableCell>
                            <TableCell>
                                19 yrs 
                                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Phone Number:
                            </TableCell>
                            <TableCell>
                                519-667-1111 
                                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            Change Password
                        </TableRow>
                        <TableRow>
                            Public
                             
                            <FormControlLabel
                                control={<Switch size="small" checked={this.checked} onChange={this.toggleChecked} />}
                                label="Small"
                            />

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