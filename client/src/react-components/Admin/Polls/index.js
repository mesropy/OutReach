import React from "react";
import './styles.css'
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
            polls: [
            ]
        })
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleActive = this.handleActive.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.deactivatePolls = this.deactivatePolls.bind(this);
        this.getInfo = this.getInfo.bind(this);
        this.getInfo();
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

    handleDelete(pollToDelete) {
        const url = '/poll/' + pollToDelete._id

        // Update Database
        // Create request constructor with parameters
        const request = new Request(url, {
            method: "DELETE"
        });


        fetch(request).then(res => {
            if (res.status === 200) {
                console.log("Poll Deleted")
            } else {
                console.log("Couldn't delete poll")
            }
        }).catch(error => {
            console.log(error)
        })

        // Update State
        this.setState({polls: this.state.polls.filter(function(poll) {
            return poll !== pollToDelete
        })})
    }

    handleActive(activePoll) {
        const toggle = !activePoll.active

        // Set poll to Active
        if (toggle) {
            // Update Database
            this.deactivatePolls();

            // Activate the main poll
            let url = '/poll/' + activePoll._id;
            // Data sent to the request
            let data = [
                {"op": "replace", "path": "/active", "value": true}
            ]

            // Create request constructor with parameters
            let request = new Request(url, {
                method: "PATCH",
                body: JSON.stringify(data),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            });
            fetch(request).then((res) => {
                if (res.status !== 200) {
                    console.log("Couldn't update the database.")
                }
            }).catch(error => {
                console.log(error)
            })
            
            // Update State
            this.setState({polls: this.state.polls.filter(function(poll) {
                if (poll === activePoll) {
                    poll.active = true
                } else {
                    poll.active = false
                }
                return poll
            })})
        }
        // Deactivate poll
        else {
            let url = '/poll/' + activePoll._id;
            // Data sent to the request
            let data = [
                {"op": "replace", "path": "/active", "value": false}
            ]

            // Create request constructor with parameters
            let request = new Request(url, {
                method: "PATCH",
                body: JSON.stringify(data),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            });
            fetch(request).then((res) => {
                if (res.status !== 200) {
                    console.log("Couldn't update the database.")
                }
            }).catch(error => {
                console.log(error)
            })
            
            // Update State
            this.setState({polls: this.state.polls.filter(function(poll) {
                if (poll === activePoll) {
                    poll.active = false
                }
                return poll
            })})
        }
        this.getInfo();
    }

    deactivatePolls() {
        // Deactivate all polls
        this.state.polls.forEach(poll => {
            // URL for request
            let url = '/poll/' + poll._id;

            // Data sent to the request
            let data = [
                {"op": "replace", "path": "/active", "value": false}
            ]

            // Create request constructor with parameters
            let request = new Request(url, {
                method: "PATCH",
                body: JSON.stringify(data),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            });
            fetch(request).then((res) => {
                if (res.status !== 200) {
                    console.log("Couldn't update the database.")
                }
            }).catch(error => {
                console.log(error)
            })
        })
    }

    getInfo() {
        const url = '/polls'

        fetch(url).then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Couldn't get the poll data.")
                return {
                    polls: []
                }
            }
        }).then(json => {
            this.setState({
                polls: json
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        if (this.state.create) {
            return <CreatePoll parentState={this} handleCreate={this.handleCreate} handleActive={this.handleActive}></CreatePoll>
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
                <PollTable state={this.state} pollsComponent={this} edit={this.state.edit} handleDelete={this.handleDelete} handleActive={this.handleActive}></PollTable>
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