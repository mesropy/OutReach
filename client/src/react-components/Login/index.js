import React from "react";
import {Redirect} from 'react-router-dom';
import '../main_styles.css';
import LoginForm from './LoginForm'
import LeftSideHeader from '../LeftSideHeader'

/* Component for the Login page */
class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
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
    // create request
    const loginInfo = {
      name: this.state.username,
      password: this.state.password
    }
    const request = new Request("/users/login", {
        method: "post",
        body: JSON.stringify(loginInfo),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // send the request
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json.currentUser !== undefined) {
                this.props.handleLogin(json.currentUser);
                this.setState({
                  loggedIn: true,
                })
            }
        })
        .catch(error => {
            this.setState({
              error: true
            })
        });
  }

  render() {
    if (this.state.loggedIn) {
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
