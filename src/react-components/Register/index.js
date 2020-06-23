import React from "react";
import './styles.css';

import RegisterForm from './RegisterForm'
import LeftSideHeader from './LeftSideHeader'

/* Component for the Register page */
class Register extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      city: "",
      age: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <LeftSideHeader></LeftSideHeader>
        <RegisterForm></RegisterForm>
      </div>
    );
  }
}

export default Register;