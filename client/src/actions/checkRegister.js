import { getUsers } from '../actions/dynamicRouting'

// Returns true if any field is empty
export const checkEmpty = (state) => {
    return (state.username === "" || state.password === "" || state.confirmPassword === "" || state.phoneNumber === "" || state.city === "default")
}

// Returns True if the username does not match the description (Length >= 6 and atleast one letter and number)
export const checkUsername = (state) => {
    return !(state.username.length >= 6 && /^[0-9a-zA-Z]+$/.test(state.username))
}

// Returns True if the password does not match
export const checkPassword = (state) => {
    return !(state.password.length >= 6 && /\d/.test(state.password) && /[a-zA-Z]/.test(state.password) && /[special_characters]/.test(state.password))
}

// Checks if a valid phone number was entered
export const checkPhone = (state) => {
    return !(/^\d{10}$/.test(state.phoneNumber))
}

// Checks if the User already exists based on the phone number
export function checkDuplicateNumber() {
  const users = this.props.global.state.users;
  let duplicate = false;
  users.forEach(user => {
    if (user.phone === this.state.phoneNumber) {
        duplicate = true;
    }
  });
  return duplicate;
}

// Check if the username already exists in the database
export function checkDuplicateName() {
  const users = this.props.global.state.users;
  let duplicate = false;
  users.forEach(user => {
    if (user.username === this.state.username) {
        duplicate = true;
    }
  });
  return duplicate;
}

// Checks if the user picked a city
export const checkCity = (state) => {
    return state.city === "default"
  }

// Check if the user is older than 13 (if they entered their date of birth)
export const checkAge = (state) => {

  if (state.age === "") {
    return false
  }

  let today = new Date();
  let birth_date = new Date(state.age);
  let age = today.getFullYear() - birth_date.getFullYear();
  let month_diff = today.getMonth() - birth_date.getMonth()
  if (month_diff < 0 || (month_diff === 0 && today.getDate() < birth_date.getDate())) {
    age = age - 1
  }
  return age < 13;
}

// Create a User in the database
export function registerDB() {
    // create request for creating a user
    const signupInfo = {
      username: this.state.username,
      password: this.state.password,
      dob: this.state.age,
      phone: this.state.phoneNumber,
      city: this.state.city
    }
    const request = new Request("/user", {
        method: "post",
        body: JSON.stringify(signupInfo),
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
              // create request for logging in user
              const loginInfo = {
                name: this.state.username,
                password: this.state.password
              }
              const request = new Request("/login", {
                  method: "post",
                  body: JSON.stringify(loginInfo),
                  headers: {
                      Accept: "application/json, text/plain, */*",
                      "Content-Type": "application/json"
                  }
              });
              // send the logging in request
              fetch(request)
                  .then(res2 => {
                      if (res2.status === 200) {
                        return res2.json();
                      }
                  })
                  .then(json2 => {
                      if (json2.currentUserId !== undefined) {
                          // update currentUser and current global states
                          this.props.handleLogin(this.state.username, json2.currentUserId);
                          // Update users global state
                          getUsers.bind(this.props.global)();
                          // update register state to redirect to home
                          this.setState({
                            register: true
                          })
                      }
                  })
                  .catch(error => {
                      this.setState({
                        error: "Could not log in"
                      })
                  });
        })
        .catch(error => {
            this.setState({
              error: "Could not register"
            })
        });
}
