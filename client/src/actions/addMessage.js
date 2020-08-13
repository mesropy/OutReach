import dateAndTime from 'date-and-time'
import meridiem from 'date-and-time/plugin/meridiem'
dateAndTime.plugin(meridiem)

export const addMessage = (timeline, username, cityName)  => {
    const now = new Date();
    const time = dateAndTime.format(now, 'h:mm a')
    const date = dateAndTime.format(now, 'MMM D')

    // we will get the age of a user from a database (with their username)
    // TODO: get public_account, and user's age from database (server call)

    const newMessage = {
      username: username,
      public_account: true,
      age: "19",
      time: time,
      date: date,
      content: timeline.state.content,
      published: false, // by default
      locationName: timeline.state.locationName,
      pinLeftPos: `${timeline.state.pinLeftPos}%`,
      pinDownPos: `${timeline.state.pinDownPos}%`
    };

    // here we will need to add this message to the database to save it
    // TODO: add this message to the database (server call)
    // (use cityName to set city of message)

    const newMessagesList = timeline.state.messages;
    newMessagesList.push(newMessage);
    timeline.setState({
        messages: newMessagesList
    });
};
