import React from "react";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        const year = (new Date()).getFullYear() - 10
        this.years = Array.from(new Array(100), (val, index) => year - index)
    }

    render() {
        return (
            <div>
                <h6>already have an account? <a href="/">login</a></h6>
                <form>
                    <input type="text" placeholder="username"></input><br/>
                    <input type="text" placeholder="password"></input><br/>
                    <input type="text" placeholder="confirm password"></input><br/>
                    <input type="text" placeholder="phone number"></input><br/>
                    <select name="city">
                        <option value="Toronto">Toronto</option>
                    </select><br/>
                    <input type="text" placeholder="select age (optional)"></input><br/>
                    <input type="submit" value="sign-up"></input>
                </form>
            </div>
        )           
    }
}

export default RegisterForm