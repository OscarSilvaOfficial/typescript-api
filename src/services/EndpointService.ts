import { BitcoinApi } from './ApiService'
const log = require('debug')('api:endpoints');


function getBitcoinToday() {
  const response = BitcoinApi.get('/v1/bpi/currentprice/BRL.json')
    .then((response) => {
      const payload = {
        updated: response.data.updated,
        USD: {
          desc: response.data.bpi.USD.description,
          value: response.data.bpi.USD.rate_float,
        },
        BRL: {
          desc: response.data.bpi.BRL.description,
          value: response.data.bpi.BRL.rate_float,
        }
      }
      return payload
    })
    .catch((error) => {
      log(error)
      throw error
    })
  
  return response
}

function getBitcoinHistory() {
  const endDate = new Date().toISOString().split('T').splice(0, 1).toString()
  const response = BitcoinApi.get(`/v1/bpi/historical/close.json?start=2010-07-17&end=${endDate}`)
    .then((response) => {
      return response.data.bpi
    })
    .catch((error) => {
      log(error)
      throw error
    })
  
  return response
}

export { getBitcoinToday, getBitcoinHistory }