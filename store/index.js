export const state = () => ({
  userData: {},

  bankList: [],
  bank: '',
  transactionDetails: {},
  link: '',
  passcode: '',
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
  SET_BANK_LIST: (state, val) => (state.bankList = val),
  SET_BANK: (state, val) => (state.bank = val),
  SET_TRANSACTION_DETAILS: (state, val) => (state.transactionDetails = val),
  SET_LINK: (state, val) => (state.link = val),
  SET_PASSCODE: (state, val) => (state.passcode = val),
}
