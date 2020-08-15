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

// Change User Privacy Option
export function handlePublic(user) {

    const newValue = !user.public

    // Update Database
    // Activate/Deactivate the main poll
    let url = '/user/' + user._id;
    // Data sent to the request
    let data = [
        {"op": "replace", "path": "/public", "value": newValue}
    ]

    // Create request constructor with parameters
    let request = new Request(url, {
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