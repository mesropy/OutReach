import React from "react";
import {Tooltip, OverlayTrigger} from "react-bootstrap"
import "./styles.css"

class RegisterForm extends React.Component {

    constructor(props) {
        super(props)
        this.onFocus = this.onFocus.bind(this)
        this.onBlur = this.onBlur.bind(this)
    }

    onFocus(e) {
        e.currentTarget.type = "date";
    }

    onBlur(e) {
        e.currentTarget.type = "text";
    }

    render() {
        const {
            username,
            password,
            confirmPassword,
            phoneNumber,
            city,
            age,
            handleChange,
            handleSubmit,
            error
        } = this.props;
        let error_class = ""
        if (error !== "") {
            error_class = "error_message_div"
        }
        else if (error === ""){
            error_class = "hide"
        }
        return (
            <div id="register_div" className="text-center">
                <form id="register_form">
                    <h6 className="register_info">already have an account? <a href="/Login">login</a></h6>
                        <span className="star">*</span><OverlayTrigger placement="left" overlay= {
                            <Tooltip>Enter a combination of atleast six letters and numbers</Tooltip>
                        }><input className="register_input" type="text" name="username" value={username} placeholder="username" onChange={handleChange}></input></OverlayTrigger><br/>
                        <span className="star">*</span><OverlayTrigger placement="left" overlay= {
                            <Tooltip>Enter a combination of atleast six letters, numbers, and punctuation marks</Tooltip>
                        }><input className="register_input" type="password" name="password" value={password} placeholder="password" onChange={handleChange}></input></OverlayTrigger><br/>
                        <span className="star">*</span><input className="register_input" type="password" name="confirmPassword" value={confirmPassword} placeholder="confirm password" onChange={handleChange}></input><br/>
                        <span className="star">*</span><input className="register_input" type="number" name="phoneNumber" value={phoneNumber} placeholder="phone number" onChange={handleChange}></input><br/>
                        <span className="star">*</span><select className="register_select" name="city" value={city} onChange={handleChange}>
                            <option disabled value="default">select a city</option>
                            <option value="Paris">Paris</option>
                            <option value="Montréal">Montréal</option>
                            <option value="Toronto">Toronto</option>
                        </select><br/>
                        <input 
                            placeholder="Birthday" 
                            type="teext" 
                            id="age_option" 
                            className="register_input textbox-n" 
                            name="age" 
                            value={age} 
                            onChange={handleChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            >
                        </input>
                        <button id="signup_button" type="button" onClick={handleSubmit}>sign-up</button>
                        <div className={error_class}>
                            <h5>{error}</h5>
                        </div>
                </form>
            </div>
        )           
    }
}

export default RegisterForm