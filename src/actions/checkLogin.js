export const checkLogin = (state) => {
    return (state.username === "user" && state.password === "user") || (state.username === "admin" && state.password === "admin")
}