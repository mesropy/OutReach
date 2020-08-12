import React from "react";
import './styles.css'
import {getInfo} from '../../../actions/adminPollEdit'
import PollTable from './PollTable'
import CreatePoll from './CreatePoll'
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus } from '@fortawesome/free-solid-svg-icons'

class AdminPoll extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            edit: false,
            create: false,
            polls: []
        })
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        getInfo.bind(this)();
    }

    // Switch to edit mode
    handleEdit() {
        const toggle = this.state.edit;
        this.setState({
            edit: !toggle,
        })
    }

    handleCreate() {
        const toggle = !this.state.create
        this.setState({
            edit: false,
            create: toggle
        })
    }

    render() {
        if (this.state.create) {
            return <CreatePoll parentState={this} handleCreate={this.handleCreate}></CreatePoll>
        }
        const edit = this.state.edit ? <button id="done_button" onClick={this.handleEdit}>
                                        <h6 id="done">Done</h6>
                                     </button> :
                                     <button id="edit_button" onClick={this.handleEdit}>
                                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon><h6>Edit</h6>
                                     </button>
        return (
            <div id="pollEntries">
                <div id="poll_edit">
                    {edit}
                </div>
                <PollTable state={this.state} pollsComponent={this} edit={this.state.edit} handleActive={this.handleActive}></PollTable>
                <br/><br/>
                    <Button id="addBtn"
                        variant="outlined"
                        color="primary"
                        onClick={this.handleCreate}>
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    <span id="addBtnText" >{"New Poll"}</span>
                </Button>
            </div>
        )
    }
}

export default AdminPoll