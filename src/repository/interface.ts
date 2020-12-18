import mongoose from 'mongoose';
import env from '../config'
const log = require('debug')('app:connDB')

const uri = env.MONGO
const conn = mongoose.connect(`${uri}`, { useNewUrlParser: true, useUnifiedTopology: true })

function getConnection() {
  const response = conn
    .then(response => {
      return response
    })
    .catch(error => {
      log(error)
      throw 'Erro na conexão com o banco'
    })
  return response
}


export { getConnection } 