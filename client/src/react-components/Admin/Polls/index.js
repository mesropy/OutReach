import React from "react";
import './styles.css'
import PollTable from './PollTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

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
        this.handleActive = this.handleActive.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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
            this.setState(state => {
                const polls = state.polls.concat(json)
                return {
                    polls
                }
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
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
            </div>
        )
    }

    // handleChange = e => {
    //     const value = e.target.value;
    //     const name = e.target.name;
    //     this.setState({
    //       [name]: value
    //     })
    // }

    // handleSubmit = e => {
    // }
    
    // render() {
    //     let poll_class = ""
    //     let error_class = ""
    //     if (this.state.error) {
    //         poll_class = "poll_error"
    //         error_class = "error_message_div"
    //     }
    //     else {
    //         poll_class = "poll_input"
    //         error_class = "hide"
    //     }
    //     return (
    //         <div id="polls_div">
    //             <h4>Create a Poll</h4>
    //             <form id="poll_form" className="text-center">
    //                 <input className={poll_class} type="text" name="poll_question" value={this.state.poll_question} placeholder="Poll Question" onChange={this.handleChange}></input>
    //                 <br/>
    //                 <input className={poll_class} type="text" name="poll_option1" value={this.state.poll_option1} placeholder="Poll Option 1" onChange={this.handleChange}></input>
    //                 <br/>
    //                 <input className={poll_class} type="text" name="poll_option2" value={this.state.poll_option2} placeholder="Poll Option 2" onChange={this.handleChange}></input>
    //                 <br/><br/>
    //                 <button id="poll_button" type="button" onClick={this.handleSubmit}>Submit</button>
    //                 <div className={error_class}>
    //                     <h5 className="error_message">Missing Poll Question</h5>
    //                     <h5 className="error_message">Please enter atleast one option.</h5>
    //                 </div>
    //             </form>
    //         </div>
    //         )
    // }
}

export default AdminPoll