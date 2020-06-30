export const removeUser = (list, user) => {
        const filteredUsers = list.state.users.filter(u => {
            return u !== user;
        });

        list.setState({
            users: filteredUsers
        });
    }