import React from "react";
import {Redirect} from 'react-router-dom';
import '../main_styles.css';
import LoginForm from './LoginForm'
import LeftSideHeader from '../LeftSideHeader'
import { checkLogin } from "../../actions/checkLogin";

/* Component for the Login page */
class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userLoggedIn: false,
      adminLoggedIn: false,
      username: "",
      password: "",
      error: false
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
    if (checkLogin(this.state)) {
      this.setState({
        error: false,
      })
      if (this.state.username === "user") {
        this.setState({
          userLoggedIn: true,
        })
      }
      else {
        this.setState({
          adminLoggedIn: true,
        })
      }
    }
    else {
      this.setState({
        error: true
      })
    }
  }

  render() {
    if (this.state.userLoggedIn || this.state.adminLoggedIn) {
      this.props.handleLogin(this.state.username);
      return <Redirect to='/'/>
    }

    return (
      <div>
        <LeftSideHeader/>
        <LoginForm
          username={this.state.username}
          password={this.state.password}
          error={this.state.error}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Login;
