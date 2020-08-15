import {getAge, getTime, getDate} from './adminMessagesEdit'

// Get this city's Messages
export function getCityMessages(city, timeline) {
    const url = '/message/city/' + city.toUpperCase()

    const cityMessages = []

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

          if (message._id) { // message with public profile
              // need to get the user's age and username
              const url = "/users/".concat(message.author)
              fetch(url)
                  .then(function (res) {
                      if (res.status === 200) {
                          return res.json()
                      } else {
                        return Promise.reject("Couldn't Find user")
                      }
                  })
                  .then(json => {
                      const age = getAge(json.user.dob)
                      const username = json.user.username
                      const time = getTime(message.date)
                      const date = getDate(message.date)
                      const newMessage = {
                          _id: message._id,
                          username: username,
                          public_account: true,
                          age: age ? (age.toString()) : null,
                          time: time,
                          date: date,
                          content: message.text,
                          published: message.published,
                          locationName: message.location.name,
                          pinLeftPos: `${message.location.x}%`,
                          pinDownPos: `${message.location.y}%`,
                          city: message.city
                      }
                      cityMessages.push(newMessage)
                  })
                  .catch(error => {
                      console.log(error);
                  });
            } else { // message is a private user's (not own user's)
                  const time = getTime(message.date)
                  const date = getDate(message.date)
                  const newMessage = {
                      _id: message._id,
                      username: "anonymous",
                      public_account: false,
                      age: null,
                      time: time,
                      date: date,
                      content: message.text,
                      published: message.published,
                      locationName: message.location.name,
                      pinLeftPos: `${message.location.x}%`,
                      pinDownPos: `${message.location.y}%`,
                      city: message.city
                  }
                  cityMessages.push(newMessage)
                }
            })
            // return cityMessages.reverse(); // in reverse chronological order

            timeline.setState({
              messages: cityMessages.reverse(),
              loadedMessages: true
            })
    })
    .catch(error => {
        console.log(error)
    })
}
