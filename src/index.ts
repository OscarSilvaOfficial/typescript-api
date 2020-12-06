import express from 'express'
import cors from 'cors'
import routerUsers from './routers/users'
import routerCovid from './routers/covid'


const app = express()

app.use(cors())
app.use(routerUsers)
app.use(routerCovid)

app.listen(3333,()=>{console.log('Servidor rodando: http://127.0.0.1:3333')})