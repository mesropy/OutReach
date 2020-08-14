// send a GET request to logout the current user
export const logout = (handleLogout) => {
    const url = "/logout";

    fetch(url)
        .then(res => {
            handleLogout()
        })
        .catch(error => {
            console.log(error);
        });
};
