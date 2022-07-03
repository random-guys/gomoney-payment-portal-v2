export const state = () => ({
  userData: {},
  bankList: [],
  bank: '',
  transactionDetails: {},
  link: '',
  passcode: '',
  linkDetails: {},
  hashLink: false,
})

export const getters = {
  accountNumber(state) {
    return state.userData?.account_number
  },
  firstName(state) {
    return state.linkDetails?.first_name
  },
  lastName(state) {
    return state.linkDetails?.last_name
  },
  claimed(state) {
    return state.linkDetails?.claimed
  },
  expired(state) {
    return state.linkDetails?.expired
  },
  senderPhoneNo(state) {
    return state.linkDetails?.phone_number
  },
  amount(state) {
    return state.linkDetails?.amount
  },
}

export const mutations = {
  SET_USER_DATA: (state, val) => (state.userData = val),
  SET_BANK_LIST: (state, val) => (state.bankList = val),
  SET_BANK: (state, val) => (state.bank = val),
  SET_TRANSACTION_DETAILS: (state, val) => (state.transactionDetails = val),
  SET_LINK: (state, val) => (state.link = val),
  SET_PASSCODE: (state, val) => (state.passcode = val),
  SET_LINK_DETAILS: (state, val) => (state.linkDetails = val),
  SET_HASH_LINK: (state, val) => (state.hashLink = val),
}
