import React from "react";
import './styles.css'
import {Switch, FormControlLabel} from "@material-ui/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

// Component for displaying the popup for creating a poll
class CreatePoll extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pollActive: false,
            pollQuestion: "",
            pollOption1: "",
            pollOption2: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        const name = e.target.name;
        if (name === "pollActive") {
            const value = e.target.checked
            this.setState({
                [name]: value
            })
        } else {
            const value = e.target.value;
            this.setState({
                [name]: value
            })
        }
    }

    handleSubmit(parentState, handleActive) {
        // Add Poll to Database
        const url = '/poll';

        const body = {
            "question": this.state.pollQuestion,
            "answers": [this.state.pollOption1, this.state.pollOption2],
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
                // If Poll is Active
                json.active = !json.active
                handleActive(json)
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {

        const {parentState, handleCreate, handleActive} = this.props

        let poll_class = ""
        let error_class = ""
        if (this.state.error) {
            poll_class = "poll_error"
            error_class = "error_message_div"
        }
        else {
            poll_class = "poll_input"
            error_class = "hide"
        }
        return (
            <div id="polls_div">
                <div id="icon_div" className="text-right">
                    <button onClick={handleCreate.bind(parentState)}><FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon></button>
                </div>
                <h4>Create a Poll</h4>
                <form id="poll_form" className="text-center">
                    <input className={poll_class} type="text" name="pollQuestion" value={this.state.pollQuestion} placeholder="Poll Question" onChange={this.handleChange}></input>
                    <br/>
                    <input className={poll_class} type="text" name="pollOption1" value={this.state.pollOption1} placeholder="Poll Option 1" onChange={this.handleChange}></input>
                    <br/>
                    <input className={poll_class} type="text" name="pollOption2" value={this.state.pollOption2} placeholder="Poll Option 2" onChange={this.handleChange}></input>
                    <br/>
                    <h6 style={{display: "inline", textAlign:"left"}}>Set Active: </h6>
                    <FormControlLabel control={
                        <Switch
                            checked={this.state.pollActive}
                            onChange={this.handleChange}
                            name={"pollActive"}
                            color="primary"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />} label={this.state.pollActive ? "On" : "Off"}/>
                    <br/><br/>
                    <button id="poll_button" type="button" onClick={() => {this.handleSubmit.bind(this, parentState, handleActive)(); handleCreate()}}>Submit</button>
                    <div className={error_class}>
                        <h5 className="error_message">Missing Poll Question</h5>
                        <h5 className="error_message">Please enter atleast one option.</h5>
                    </div>
                </form>
            </div>
            )
    }
}

export default CreatePoll