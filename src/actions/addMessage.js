export const addMessage = (timeline, username)  => {
    const today = new Date();
    const time = today.getHours() + ":" + ('0' + today.getMinutes()).slice(-2);
    const date = today.toLocaleString('default', { month: 'short' }) + " " + today.getDate();

    // we will get the age of a user from a database (with their username)

    const newMessage = {
      username: username,
      age: "19",
      time: time,
      date: date,
      content: timeline.state.content,
      locationName: timeline.state.locationName,
      pinLeftPos: timeline.state.pinLeftPos,
      pinDownPos: timeline.state.pinDownPos
    };

    // here we will need to add this message to the database to save it
    // (we will also need the city, which we can access from the message)
    const newMessagesList = timeline.state.messages;
    newMessagesList.push(newMessage);
    timeline.setState({
        messages: newMessagesList
    });
};
