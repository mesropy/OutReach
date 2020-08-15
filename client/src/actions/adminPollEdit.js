// Get data for all Polls
export function getInfo() {
    // Grab from database
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
        // Update State
        this.setState({
            polls: json
        })
    })
    .catch(error => {
        console.log(error)
    })
}

// Changing the 'active' property of a Poll
export function handleActive(self, activePoll) {
    const toggle = !activePoll.active

    // If the poll is going to be set to Active
    if (toggle) {
        // Deactivate all Polls
        deactivatePolls.bind(self)();
    }

    // Activate/Deactivate the main poll
    let url = '/poll/' + activePoll._id;
    // Data sent to the request
    let data = [
        {"op": "replace", "path": "/active", "value": toggle}
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
    
    // Poll is set to Active
    if (toggle) {
        // Update State
        self.setState({polls: self.state.polls.filter(function(poll) {
            if (poll === activePoll) {
                poll.active = true
            } else {
                poll.active = false
            }
            return poll
        })})
    }
    // Poll is deactivated 
    else {
        // Update State
        self.setState({polls: self.state.polls.filter(function(poll) {
            if (poll === activePoll) {
                poll.active = false
            }
            return poll
        })})
    }
    // Update information
    getInfo.bind(self)();
}

// Deactivate all Polls
function deactivatePolls() {
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


// Creates a Poll
export function handleSubmit(parentState) {

    // Add Poll to Database
    const url = '/poll';

    // Check Question
    if (this.state.pollQuestion === "") {
        this.setState({
            error: true,
            errorMessage: "Missing Poll Question"
        })
        return ;
    }

    // Get non-empty poll Options
    const tempPollAnswers = [this.state.pollOption1, this.state.pollOption2, this.state.pollOption3, this.state.pollOption4]
    const pollAnswers = tempPollAnswers.filter(poll => {
        return poll !== ""
    });

    if (pollAnswers.length <= 1) {
        this.setState({
            error: true,
            errorMessage: "Please enter atleast two poll options."
        })
        return ;
    }

    // Payload
    const body = {
        "question": this.state.pollQuestion,
        "answers": pollAnswers,
        "active": this.state.pollActive
    }
    const request = new Request(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            // Activate Poll (or do nothing if it's not active) and update information
            json.active = !json.active
            handleActive.bind(this, parentState, json)()
            // Go back to the Polls menu
            parentState.handleCreate();
        })
        .catch(error => {
            console.log(error);
        });
}

// Deletes a Poll
export function handleDelete(self, pollToDelete) {
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
    self.setState({polls: self.state.polls.filter(function(poll) {
        return poll !== pollToDelete
    })})
}