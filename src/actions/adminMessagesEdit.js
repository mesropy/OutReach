export const removePublishedMessage = (list, message) => {
    const filteredMessages = list.state.publishedMessages.filter(m => {
        return m !== message;
    });

    list.setState({
        publishedMessages: filteredMessages
    });
}

export const disapproveMessage = (list, message) => {
    const filteredMessages = list.state.pendingMessages.filter(m => {
        return m !== message;
    });

    list.setState({
        pendingMessages: filteredMessages
    });
}

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