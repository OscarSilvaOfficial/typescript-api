import { getConnection } from '../repository/interface'

const insert = async(collection: object) => {
  const response = await getConnection()
  response.connection.collection('btcollec').insertOne(collection)
  return 'Dados inseridos'
}

export { insert }