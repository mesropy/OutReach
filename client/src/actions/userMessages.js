import {getAge, getTime, getDate} from './adminMessagesEdit'

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
    console.log(newUsername)
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