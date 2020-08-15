// check if a user is logged in on the session cookie
export const readCookie = (handleLogin) => {
    const url = "/user/check-session";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.currentUser) {
                // set the global user state
                handleLogin(json.currentUser, json.currentUserId);
            }
        })
        .catch(error => {
            console.log(error);
        });
};
