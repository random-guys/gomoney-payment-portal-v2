import axios from 'axios'

const baseUrl = process.env.VUE_APP_BASE_URL

export const getBankList = () =>
  axios.get('https://api.staging.gomoney.global' + '/nip/outbound/banks')
