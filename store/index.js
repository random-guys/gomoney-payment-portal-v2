export const state = () => ({
  userData: {},
  bankList: [],
  bank: '',
  transactionDetails: {},
  link: '',
  passcode: '',
  linkDetails: {},
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
    const amount = state.linkDetails?.amount?.toString()
    return amount?.slice(0, amount.length - 2) + '.' + amount?.slice(-2)
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
}
