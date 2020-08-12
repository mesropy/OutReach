import dateAndTime from 'date-and-time'
import meridiem from 'date-and-time/plugin/meridiem'
dateAndTime.plugin(meridiem)

export const addMessage = (timeline, username)  => {
    const now = new Date();
    const time = dateAndTime.format(now, 'h:mm a')
    const date = dateAndTime.format(now, 'MMM D')

    // we will get the age of a user from a database (with their username)
    // TODO: get user's age from database

    const newMessage = {
      username: username,
      age: "19",
      time: time,
      date: date,
      content: timeline.state.content,
      locationName: timeline.state.locationName,
      pinLeftPos: `${timeline.state.pinLeftPos}%`,
      pinDownPos: `${timeline.state.pinDownPos}%`
    };

    // here we will need to add this message to the database to save it
    // (we will also need the city, which we can access from the message)
    const newMessagesList = timeline.state.messages;
    newMessagesList.push(newMessage);
    timeline.setState({
        messages: newMessagesList
    });
};
