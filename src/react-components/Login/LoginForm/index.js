import React from "react";
import "./styles.css"

class LoginForm extends React.Component {

    render() {
        const {
            username,
            password,
            error,
            handleChange,
            handleSubmit
        } = this.props;
        let input_class = ""
        let error_class = ""
        if (error) {
            input_class = "input_error"
            error_class = "error_message_div"
        }
        else {
            input_class = "login_input"
            error_class = "hide"
        }
        return (
            <div id="login_div" className="text-center">
                <form id="login_form" className="text-center">
                    <h6 className="login_info">don't have an account? <a href="/Register">sign-up</a></h6>
                    <span className="star">*</span>
                    <input className={input_class} type="text" name="username" value={username} placeholder="username" onChange={handleChange}></input>
                    <br/>
                    <span className="star">*</span>
                    <input className={input_class} type="password" name="password" value={password} placeholder="password" onChange={handleChange}></input>
                    <br/><br/>
                    <button id="login_button" type="button" onClick={handleSubmit}>login</button>
                    <div className={error_class}>
                        <h5 className="error_message">The username or password you</h5>
                        <h5 className="error_message">entered is incorrect.</h5>
                    </div>
                </form>
            </div>
        )           
    }
}

export default LoginForm