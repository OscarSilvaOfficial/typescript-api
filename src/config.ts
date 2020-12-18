import env from 'dotenv'
env.config()

const invVar = {
  MONGO: process.env.MONGO_DB
} 

export default invVar