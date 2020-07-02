import React from "react";
import {Redirect} from 'react-router-dom';
import '../main_styles.css';
import { checkCity, checkEmpty, checkPassword, checkPhone, checkUsername } from "../../actions/checkRegister"
import RegisterForm from './RegisterForm'
import LeftSideHeader from '../LeftSideHeader'

/* Component for the Register page */
class Register extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      register: false,
      username: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      city: "default",
      age: "default",
      error: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    if (checkEmpty(this.state)) {
      this.setState({
        error: "Please fill in all required fields."
      })
    }
    else if (checkUsername(this.state)) {
      this.setState({
        error: "Username must match the required description."
      })
    }
    else if (checkPassword(this.state)) {
      this.setState({
        error: "Password must match the required description."
      })
    }
    else if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        error: "Confirm Password must match the Password entered."
      })
    }
    else if (checkPhone(this.state)) {
      this.setState({
        error: "Please enter a valid Phone Number."
      })
    }
    else if (checkCity(this.state)) {
      this.setState({
        error: "Please select a valid city."
      })
    }
    else {
      this.setState({
        register: true
      })
    }
  }

  render() {
    if (this.state.register) {
      return <Redirect to='/U'/>
    }

    return (
      <div>
        <LeftSideHeader/>
        <RegisterForm
          username={this.state.username}
          password={this.state.password}
          confirmPassword={this.state.confirmPassword}
          phoneNumber={this.state.phoneNumber}
          city={this.state.city}
          age={this.state.age}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default Register;