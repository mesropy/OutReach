import React from "react";
import { uid } from "react-uid";
import './styles.css'
import Poll from '../Poll'
import Table from '@material-ui/core/Table'
import TableBody from "@material-ui/core/TableBody";
import { TableHead, TableRow, TableCell } from "@material-ui/core";

// Component that displays the table of all users
class PollTable extends React.Component {
    render() {

        const {state, pollsComponent, edit, handleDelete, handleActive} = this.props

        const deleteRow = edit ? <TableCell style={{width: 100}}></TableCell> : null

        return (
            <div>
                <div>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{width: 250}}>Poll Question</TableCell>
                                <TableRow>
                                    <TableCell style={{width: 350}}>Poll Answers</TableCell>
                                    <TableCell style={{width: 100}}>Votes</TableCell>
                                </TableRow>
                                <TableCell style={{width: 100}}>Active</TableCell>
                                {deleteRow}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {state.polls.map(poll => (
                                <Poll key={uid(poll)} poll={poll} edit={edit} parentState={pollsComponent} handleDelete={handleDelete} handleActive={handleActive}/>
                            ))}
                        </TableBody>
                    </Table>
                </div>

            </div>
        )
    }
}

export default PollTable
