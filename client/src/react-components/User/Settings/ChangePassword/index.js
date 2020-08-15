import React from "react";
import './styles.css'
import {changePassword} from '../../../../actions/userSettings'
import { TextField, } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

// Component for displaying the popup for changing the password
class ChangePassword extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: this.props.userPage,
            currentPassword: "",
            newPassword: "",
            confirmPassword: ""
        }
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {

        const {parentState, userComponent} = this.props

        let pass_class = ""
        let error_class = ""
        if (this.state.error) {
            pass_class = "pass_error"
            error_class = "error_message_div"
        }
        else {
            pass_class = "pass_input"
            error_class = "hide"
        }
        return (
            <div id="pass_div">
                <div id="icon_div" className="text-right">
                    <button onClick={parentState.handleChangePass}><FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon></button>
                </div>
                <h4>Change Password</h4>
                <form id="pass_form" className="text-center">
                    <TextField
                        className={pass_class}
                        placeholder="Current Password"
                        variant="outlined"
                        name="currentPassword"
                        onChange={this.handleInput}
                    /> 
                    <br/><br/>
                    <TextField
                        className={pass_class}
                        placeholder="New Password"
                        variant="outlined"
                        name="newPassword"
                        onChange={this.handleInput}
                    /> 
                    <br/>
                    <TextField
                        className={pass_class}
                        placeholder="Confirm Password"
                        variant="outlined"
                        name="confirmPassword"
                        onChange={this.handleInput}
                    />
                    <br/><br/>
                    <button id="pass_button" type="button" onClick={() => {
                        const value = changePassword.bind(this, this.props.userPage, userComponent)()
                        value.then(function(res) {
                            if (res) {
                                parentState.handleChangePass();
                            }
                        }).catch((error) => {
                            console.log(error)
                        })
                        }}>Change Password</button>
                    <div className={error_class}>
                        <h5 className="error_message">{this.state.errorMessage}</h5>
                    </div>
                </form>
            </div>
        )
    }
}

export default ChangePassword