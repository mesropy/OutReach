// Removes a published message from the list of published messages
export const removePublishedMessage = (list, message) => {

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
    const filteredMessages = list.state.publishedMessages.filter(m => {
        return m !== message;
    });

    list.setState({
        publishedMessages: filteredMessages
    });
}

// Removes a message from the list of pending mesages
export const disapproveMessage = (list, message) => {
    const filteredMessages = list.state.pendingMessages.filter(m => {
        return m !== message;
    });

    list.setState({
        pendingMessages: filteredMessages
    });
}

// Moves a message from the list of pending messages to the list of published messages
export const approveMessage = (list, message) => {
    const filteredPendingMessages = list.state.pendingMessages.filter(m => {
        return m !== message;
    });

    const newPublishedMssages = list.state.publishedMessages
    newPublishedMssages.push(message)

    list.setState({
        pendingMessages: filteredPendingMessages,
        publishedMessages: newPublishedMssages 
    })
}