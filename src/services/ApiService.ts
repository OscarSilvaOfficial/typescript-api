import axios from 'axios'


const BitcoinApi = axios.create({
  baseURL: 'https://api.coindesk.com/'
})

export { BitcoinApi }