// Returns true if any field is empty
export const checkEmpty = (state) => {
    return (state.username === "" || state.password === "" || state.confirmPassword === "" || state.phoneNumber === "" || state.city === "default")
}

// Returns True if the username does not match the description (Length >= 6 and atleast one letter and number)
export const checkUsername = (state) => {
    if (state.username.startsWith("admin")) {
      return true
    }
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
export function checkDuplicate() {
  const users = this.props.global.state.users;
  let duplicate = false;
  users.forEach(user => {
    console.log(user.phone)
    if (user.phone === this.state.phoneNumber) {
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
  const url = '/user'

  const body = {
    "username": this.state.username,
    "password": this.state.password,
    "dob": this.state.age,
    "phone": this.state.phoneNumber,
    "city": this.state.city
  }

  const request = new Request(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
      }
  });

  // Send the request with fetch()
  fetch(request)
      .then(res => {
          if (res.status === 200) {
              console.log("User registered.")
          } else {
            console.log("Failed to register User.")
          }
      })
      .catch(error => {
          console.log(error);
      });

}