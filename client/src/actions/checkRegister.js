// Returns true if any field is empty
export const checkEmpty = (state) => {
    return (state.username === "" || state.password === "" || state.confirmPassword === "" || state.phoneNumber === "" || state.city === "default")
  }

// Returns True if the username does not match the description (Length >= 6 and atleast one letter and number)
export const checkUsername = (state) => {
    return !(state.username.length >= 6 && /^[0-9a-zA-Z]+$/.test(state.username))
  }

// Returns True if the password does not match
export const checkPassword = (state) => {
    return !(state.password.length >= 6 && /\d/.test(state.password) && /[a-zA-Z]/.test(state.password) && /[special_characters]/.test(state.password))
  }

export const checkPhone = (state) => {
    return !(/^\d{10}$/.test(state.phoneNumber))
  }

export const checkCity = (state) => {
    return !(state.city === "Toronto")
  }

export const checkAge = (state) => {

  if (state.age === "") {
    return false
  }

  let today = new Date();
  let birth_date = new Date(state.age);
  let age = today.getFullYear() - birth_date.getFullYear();
  let month_diff = today.getMonth() - birth_date.getMonth()
  if (month_diff < 0 || (month_diff === 0 && today.getDate() < birth_date.getDate())) {
    age = age - 1
  }
  return age < 13;
}