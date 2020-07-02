export const addMessage = messageList => {
    if (messageList.state.content === "") {
        alert("Cannot post a empty message.");
        return;
    }
    const newMessageList = messageList.state.messages;
    const newPost = [messageList.state.name, messageList.state.content];
    newMessageList.push(newPost);
    messageList.setState({
        messages: newMessageList
    });
};
