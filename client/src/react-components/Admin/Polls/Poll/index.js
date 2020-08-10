import React from "react";
import './styles.css'
import { uid } from "react-uid";
import {TableCell, TableRow, Switch, FormControlLabel, Button} from "@material-ui/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

// Component displaying a row entry for a user
class Poll extends React.Component {

    render() {
        const {poll, edit, parentState, handleDelete, handleActive} = this.props
        
        const deleteRow = edit ? <TableCell component="tr" scope="row" style={{width: 100}}>
                                    <Button onClick={handleDelete.bind(parentState, poll)}>
                                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                        <h6>delete</h6>
                                    </Button>
                                </TableCell> : null
        return (
            <TableRow key={poll.question}>
                {/* Poll Question */}
                <TableCell component="tr" scope="row">
                    {poll.question}
                </TableCell>
                {/* Poll Answer and Vote */}
                {poll.answers.map(answer => (
                    <TableRow>
                        <TableCell style={{width: 350}} component="tr" scope="row">
                            <span key={uid(answer)}>{answer.option}</span>
                        </TableCell>
                        <TableCell style={{width: 100}} component="tr" scope="row">
                                <span key={uid(answer)}>{answer.votes}</span>
                        </TableCell>
                    </TableRow>
                ))}
                {/* Active Status */}
                <TableCell component="tr" scope="row">
                    <FormControlLabel control={
                        <Switch
                            checked={poll.active}
                            onChange={handleActive.bind(parentState, poll)}
                            name={poll.question}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                            disabled={!edit}
                        />} label={poll.active ? "On" : "Off"}/>
                </TableCell>
                {/* Delete Option */}
                {deleteRow}
            </TableRow>
        )
    }
}

export default Poll
