import React from "react";
import {Redirect} from 'react-router-dom';
import '../main_styles.css';

import RegisterForm from './RegisterForm'
import LeftSideHeader from './LeftSideHeader'

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
      age: "default"
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkEmpty = this.checkEmpty.bind(this);
    this.checkUsername = this.checkUsername.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.checkPhone = this.checkPhone.bind(this);
    this.checkCity = this.checkCity.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    })
  }

  checkEmpty() {
    return (this.state.username === "" || this.state.password === "" || this.state.confirmPassword === "" || this.state.phoneNumber === "" || this.state.city === "default")
  }

  checkUsername() {
    return !(this.state.username.length >= 6 && /^[0-9a-zA-Z]+$/.test(this.state.username))
  }

  checkPassword() {
    return !(this.state.password.length >= 6 && /\d/.test(this.state.password) && /[a-zA-Z]/.test(this.state.password) && /[special_characters]/.test(this.state.password))
  }

  checkPhone() {
    return !(/^\d{10}$/.test(this.state.phoneNumber))
  }

  checkCity() {
    return !(this.state.city === "Toronto")
  }

  handleSubmit(e) {
    if (this.checkEmpty()) {
      alert("Please fill in all required fields.");
    }
    else if (this.checkUsername()) {
      alert("Username must match the required description.")
    }
    else if (this.checkPassword()) {
      alert("Password must match the required description.");
    }
    else if (this.state.password !== this.state.confirmPassword) {
      alert("Confirm Password must match the Password entered.");
    }
    else if (this.checkPhone()) {
      alert("Please enter a valid Phone Number.");
    }
    else if (this.checkCity()) {
      alert("Please select a valid city.");
    }
    else {
      alert("Registration Success!");
      this.setState({
        register: true
      })
    }
  }

  render() {
    if (this.state.register === true) {
      return <Redirect to='/'/>
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
        />
      </div>
    );
  }
}

export default Register;