import React from "react";
import './styles.css'

class Poll extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            poll_question: "",
            poll_option1: "",
            poll_option2: "",
            error: false
          }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
          [name]: value
        })
    }

    handleSubmit = e => {
    }
    
    render() {
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
                <h4>Create a Poll</h4>
                <form id="poll_form" className="text-center">
                    <input className={poll_class} type="text" name="poll_question" value={this.state.poll_question} placeholder="Poll Question" onChange={this.handleChange}></input>
                    <br/>
                    <input className={poll_class} type="text" name="poll_option1" value={this.state.poll_option1} placeholder="Poll Option 1" onChange={this.handleChange}></input>
                    <br/>
                    <input className={poll_class} type="text" name="poll_option2" value={this.state.poll_option2} placeholder="Poll Option 2" onChange={this.handleChange}></input>
                    <br/><br/>
                    <button id="poll_button" type="button" onClick={this.handleSubmit}>Submit</button>
                    <div className={error_class}>
                        <h5 className="error_message">Missing Poll Question</h5>
                        <h5 className="error_message">Please enter atleast one option.</h5>
                    </div>
                </form>
            </div>
            )
    }
}

export default Poll