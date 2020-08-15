import dateAndTime from 'date-and-time'
import meridiem from 'date-and-time/plugin/meridiem'
dateAndTime.plugin(meridiem)

// TODO: fix bug, content, pinLeftPos, pinDownPos, and locationName
// don't update in timeline (are always saved as empty strings or null)
export const addMessage = (timeline, username, userId, cityName)  => {
    const now = new Date();
    const time = dateAndTime.format(now, 'h:mm a')
    const date = dateAndTime.format(now, 'MMM D')

    // get these from database with server call
    let age = null;
    let public_account;
    const content = timeline.state.content;
    const locationName = timeline.state.locationName;
    const pinLeftPos = timeline.state.pinLeftPos;
    const pinDownPos = timeline.state.pinDownPos;
    // Get the user with id of userId
    // (since this is a GET request, we're simply calling with the url)
    const url = "/users/".concat(userId)
    fetch(url)
        .then(function (res) {
            if (res.status === 200) {
                return res.json()
            } else {
              return Promise.reject("Couldn't Find user")
            }
        })
        .then(json => {
            // get age and public from this user
            console.log("dob:", json.user.dob)
            if (json.user.dob !== ""){
              // convert date of birth to age
              // (dob saved as YYYY-MM-DD)
              const today = new Date();
              const birth_date = new Date(json.user.dob);
              age = today.getFullYear() - birth_date.getFullYear();
              const month_diff = today.getMonth() - birth_date.getMonth()
              if (month_diff < 0 || (month_diff === 0 && today.getDate() < birth_date.getDate())) {
                age = age - 1
              }
            }
            public_account = json.user.public

            // add a new message to the page by adding it to the messages list
            const newMessage = {
              city: cityName,
              username: username,
              public_account: public_account,
              age: age,
              time: time,
              date: date,
              content: content,
              published: false, // by default
              locationName: locationName,
              pinLeftPos: `${pinLeftPos}%`,
              pinDownPos: `${pinDownPos}%`
            };
            const newMessagesList = timeline.state.messages;
            newMessagesList.unshift(newMessage);
            timeline.setState({
                messages: newMessagesList
            });

            // add the message to the database with a server call

            const newMessageData = {
                text: newMessage.content,
                date: dateAndTime.format(now, "YYYY-MM-DD HH:MM"),
                location: {
                  name: newMessage.locationName,
                  x: pinLeftPos,
                  y: pinDownPos
                },
                city: cityName,
                published: false,
                author: userId
            }

            const request = new Request("/message", {
                method: 'post',
                body: JSON.stringify(newMessageData),
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })

            fetch(request)
                .then()
                .catch(error => {
                    console.log(error)
                });

        })
        .catch(error => {
            console.log(error);
        });
};
