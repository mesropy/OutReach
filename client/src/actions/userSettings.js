import date from 'date-and-time'
const bcrypt = require('bcryptjs');

// Change User's username
export function changeUsername(user, newUsername, global) {
    if (checkUsername(newUsername)) {
        console.log("Username must match description.")
        return false;
    }
    if (checkDuplicateName.bind(global, newUsername)()) {
        console.log("Username already taken.")
        return false;
    }

    // Update Database
    const url = '/user/' + user._id;
    // Data sent to the request
    const data = [
        {"op": "replace", "path": "/username", "value": newUsername}
    ]

    // Create request constructor with parameters
    const request = new Request(url, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    });
    fetch(request).then((res) => {
        if (res.status !== 200) {
            console.log("Couldn't update the database.")
        }
    }).catch(error => {
        console.log(error)
    })

    user.username = newUsername
    // Update State
    this.setState({
        user: user
    })
    return true;
}

// Change the User's DOB
export function changeDOB(user, newDOB) {
    if (checkAge(newDOB)) {
        console.log("Age is less than 13 years old")
        return false;
    }
    const newDOBformatted = date.format(newDOB, "YYYY-MM-DD")

    // Update Database
    const url = '/user/' + user._id;
    // Data sent to the request
    const data = [
        {"op": "replace", "path": "/dob", "value": newDOBformatted}
    ]

    // Create request constructor with parameters
    const request = new Request(url, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    });
    fetch(request).then((res) => {
        if (res.status !== 200) {
            console.log("Couldn't update the database.")
        }
    }).catch(error => {
        console.log(error)
    })

    user.dob = newDOBformatted
    // Update State
    this.setState({
        user: user
    })
    return true;
}

// Check if username is valid. Return true if not valid
function checkUsername(newUsername) {
    return !(newUsername.length >= 6 && /^[0-9a-zA-Z]+$/.test(newUsername))
}

// Check if the username already exists in the database
function checkDuplicateName(newUsername) {
  const users = this.state.users;
  let duplicate = false;
  users.forEach(user => {
    if (user.username === newUsername) {
        duplicate = true;
    }
  });
  return duplicate;
}

// Check if the new DOB is older than 13
function checkAge(newAge) {
    if (newAge === "") {
        return false
    }

    let today = new Date();
    let birth_date = new Date(newAge);
    let age = today.getFullYear() - birth_date.getFullYear();
    let month_diff = today.getMonth() - birth_date.getMonth()
    if (month_diff < 0 || (month_diff === 0 && today.getDate() < birth_date.getDate())) {
        age = age - 1
    }
    return age < 13;
}

// Change User Privacy Option
export function handlePublic(user) {

    const newValue = !user.public

    // Update Database
    const url = '/user/' + user._id;
    // Data sent to the request
    const data = [
        {"op": "replace", "path": "/public", "value": newValue}
    ]

    // Create request constructor with parameters
    const request = new Request(url, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    });
    fetch(request).then((res) => {
        if (res.status !== 200) {
            console.log("Couldn't update the database.")
        }
    }).catch(error => {
        console.log(error)
    })

    user.public = newValue

    // Update State
    this.setState({
        user: user
    })

}

// Change Password
export function changePassword(user, userComponent) {

    if (this.state.currentPassword === "") {
        return Promise.reject("Current Password field is empty.")
    }
    const self = this
    return new Promise(function(resolve, reject) {
        // Check if currentPassword is correct
        bcrypt.compare(self.state.currentPassword, self.state.user.password, (err, result) => {
            if (result) {
                // Test New Password
                if (testPassword(self.state.newPassword)) {
                    return reject("New Password does not match the description.");
                }
                // Check if Confirm Password Matches
                if (self.state.newPassword !== self.state.confirmPassword) {
                    return reject("Confirm Password does not match the new password.")
                }
                // Update Database
                const url = '/user/' + user._id;
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(self.state.newPassword, salt, (err, hash) => {
                        const newValue = hash
                        // Data sent to the request
                        const data = [
                            {"op": "replace", "path": "/password", "value": newValue}
                        ]
                        // Create request constructor with parameters
                        const request = new Request(url, {
                            method: "PATCH",
                            body: JSON.stringify(data),
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json"
                            }
                        });
                        fetch(request).then((res) => {
                            if (res.status !== 200) {
                                return reject("Couldn't update the database.")
                            }
                            user.password = newValue

                            // Update State
                            userComponent.setState({
                                user: user
                            })
                            return resolve(true)
                        }).catch(error => {
                            console.log(error)
                        })
                    })
                })
            } else {
                return reject("Incorrect Password")
            }
        })
    })
}

function testPassword(password) {
    return !(password.length >= 6 && /\d/.test(password) && /[a-zA-Z]/.test(password) && /[special_characters]/.test(password))
}