import React from "react";
import { uid } from "react-uid";
import {Tooltip, OverlayTrigger} from "react-bootstrap"
import "./styles.css"

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        const year = (new Date()).getFullYear() - 10
        this.years = Array.from(new Array(100), (val, index) => year - index)
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
            handleSubmit
        } = this.props;

        return (
            <div id="register_div">
                <h6>already have an account? <a href="/">login</a></h6>
                <form id="form">
                    <span class="star">*</span><OverlayTrigger placement="left" overlay= {
                        <Tooltip>Enter a combination of atleast six letters and numbers</Tooltip>
                    }><input type="text" name="username" value={username} placeholder="username" onChange={handleChange}></input></OverlayTrigger><br/>
                    <span class="star">*</span><OverlayTrigger placement="left" overlay= {
                        <Tooltip>Enter a combination of atleast six letters, numbers, and punctuation marks</Tooltip>
                    }><input type="password" name="password" value={password} placeholder="password" onChange={handleChange}></input></OverlayTrigger><br/>
                    <span class="star">*</span><input type="password" name="confirmPassword" value={confirmPassword} placeholder="confirm password" onChange={handleChange}></input><br/>
                    <span class="star">*</span><input type="text" name="phoneNumber" value={phoneNumber} placeholder="phone number" onChange={handleChange}></input><br/>
                    <span class="star">*</span><select name="city" value={city} onChange={handleChange}>
                        <option disabled value="default">select a city</option>
                        <option value="Toronto">Toronto</option>
                    </select><br/>
                    <select id="age_option" name="age" value={age} onChange={handleChange}>
                        <option disabled value="default">select age (optional)</option>
                        {
                            this.years.map((year, index) => {
                                return (<option key={uid({year})} value={year}>{year}</option>)
                            })
                        }
                    </select><br/>
                </form>
                <button id="signup" type="submit" onClick={handleSubmit} aria-label="Hi" data-balloon-pos="up">sign-up</button>
            </div>
        )           
    }
}

export default RegisterForm