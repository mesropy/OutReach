import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import './styles.css';

import RegisterForm from './RegisterForm'

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
        <Link to={"./../"}>
          <Button variant="primary">Home</Button>
        </Link>
        <h1 className="text-center">OutReach</h1>
        <RegisterForm></RegisterForm>
      </div>
    );
  }
}

export default Register;