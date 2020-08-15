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