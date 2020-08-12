// Get Users
export function getInfo() {
    const url = '/users'

    fetch(url).then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            console.log("Couldn't get users.")
            return [];
        }
    }).then(json => {
        this.setState({
            users: json
        })
    })
    .catch(error => {
        console.log(error)
    })
}

// Removes a user from the list of users
export const removeUser = (list, user) => {

    // Update Database
    // Delete the User
    const url = '/user/' + user._id

    const request = new Request(url, {
        method: "DELETE"
    });

    fetch(request).then(res => {
        if (res.status === 200) {
            console.log("User Deleted")
        } else {
            console.log("Couldn't delete user")
        }
    }).catch(error => {
        console.log(error)
    })

    // Get all the Messages by the User
    const url2 = '/message/' + user._id

    fetch(url2).then(res => {
        if (res.status === 200) {
            return res.json()
        }
        else {
            console.log("Couldn't delete the user's messages")
            return [];
        }
    }).then(messages => {
        // Delete each Message
        messages.forEach(message => {
            const url3 = '/message/' + message._id;

            const request2 = new Request(url3, {
                method: "DELETE"
            });

            fetch(request2).then(res => {
                if (res.status === 200) {
                    console.log("Message Deleted")
                } else {
                    console.log("Couldn't delete message")
                }
            }).catch(error => {
                console.log(error)
            })
        });
    })

    // Update State
    const filteredUsers = list.state.users.filter(u => {
        return u !== user;
    });

    list.setState({
        users: filteredUsers
    });
}