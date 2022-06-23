import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.baseUrl,
})

//GET REQUESTS

export const getBankList = () => api.get('/nip/outbound/banks')

export const userProfile = (phoneNo) => api.get('/utils/profile/' + phoneNo)

export const getGomoneyAccDetails = (number) => api.get('/utils/info/' + number)

//POST REQUESTS

/**
 * @param {user details object of} {
 * link: 'payment Link'
 * referrer: 'referrer phone number'
 * amount: 'amount in the link'
 * from_website: true
 * first_name: ade,
 * last_name: ade,
 * phone_number: 08099999999,
 * password: 0000, }
 *
 * @return {object with user account details}
 */
export const createUser = (details) => api.post('/user/link', details)

/**
 * @param {user account number and bank details object of} {
 *  "destination_bank_code": "bank code",
 *  "account_number": "10 digits",
 *  "channel_code": " channel code" }
 *
 * @return {object with user account details}
 */
export const externalBankUserDetails = (details) =>
  api.post('/nip/outbound/name/enquiry', {
    ...details,
    channel_code: '2',
  })

/**
 * @param {user account number and bank details object of} {
 * link: 'send payment link',
 * destination_bank_code: bank_code,
 * destination_account_number: account_number,
 * passcode: '',
 * }
 *
 * @return {object with external bank details}
 */
export const redeemToOther = (details) =>
  api.post('/link/bank-transfers/', {
    ...details,
  })
