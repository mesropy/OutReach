import {getAge, getTime, getDate} from './adminMessagesEdit'
import date from 'date-and-time'

// Get data for User Messages
export function getUserMessages(user) {
    const url = '/message/' + user._id

    const newUserMessages = []

    // Get all Messages
    fetch(url).then(message => {
        if (message.status === 200) {
            return message.json();
        } else {
            console.log("Couldn't get messages.")
            return []
        }
    }).then(json => {
        // Add each message to the appropriate list
        json.forEach(message => {
            const age = getAge(user.dob)
            const time = getTime(message.date)
            const date = getDate(message.date)
            const newMessage = {
                _id: message._id,
                username: user.username,
                public_account: user.public,
                age: (age.toString()), 
                time: time, 
                date: date, 
                content: message.text,
                published: message.published,
                locationName: message.location.name, 
                pinLeftPos: `${message.location.x}%`, 
                pinDownPos: `${message.location.y}%`
            }
            newUserMessages.push(newMessage)
        })
    })
    .catch(error => {
        console.log(error)
    })

    return newUserMessages;
}

// Deletes a User message
export function removeUserMessage(message) {

    // Update Database
    const url = '/message/' + message._id

    const request = new Request(url, {
        method: "DELETE"
    });

    fetch(request).then(res => {
        if (res.status === 200) {
            console.log("Message Deleted")
        } else {
            console.log("Couldn't delete message")
        }
    }).catch(error => {
        console.log(error)
    })

    // Update State
    const filteredMessages = this.state.userMessages.filter(m => {
        return m !== message;
    });

    this.setState({
        userMessages: filteredMessages
    });
}


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