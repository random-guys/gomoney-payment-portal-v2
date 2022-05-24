export const state = () => ({
  userData: {},
})

export const getters = {
  accountNumber(state) {
    return state.userData.account_number
  },
  firstName(state) {
    return state.userData.first_name
  },
  lastName(state) {
    return state.userData.last_name
  },
}

export const mutations = {
  SET_USER_DATA: (state, val) => (state.userData = val),
}
