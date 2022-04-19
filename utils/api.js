import axios from 'axios'
// import { getItem } from '@/utils/storage.js'

const baseUrl = `${process.env.VUE_APP_BASE_URL}`
export default {
  //   getHeader: () => ({
  //     Authorization: 'Bearer ' + getItem('org_token'),
  //   }),
  // return headers

  verifyLink(id) {
    return axios.get(`${baseUrl}/payment-request-links/${id}`)
  },
}
