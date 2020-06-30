export const checkEmpty = (state) => {
    return (state.username === "" || state.password === "" || state.confirmPassword === "" || state.phoneNumber === "" || state.city === "default")
  }

export const checkUsername = (state) => {
    return !(state.username.length >= 6 && /^[0-9a-zA-Z]+$/.test(state.username))
  }

export const checkPassword = (state) => {
    return !(state.password.length >= 6 && /\d/.test(state.password) && /[a-zA-Z]/.test(state.password) && /[special_characters]/.test(state.password))
  }

export const checkPhone = (state) => {
    return !(/^\d{10}$/.test(state.phoneNumber))
  }

export const checkCity = (state) => {
    return !(state.city === "Toronto")
  }