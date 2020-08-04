// Removes a user from the list of users
export const removeUser = (list, user) => {
    const filteredUsers = list.state.users.filter(u => {
        return u !== user;
    });

    list.setState({
        users: filteredUsers
    });
}