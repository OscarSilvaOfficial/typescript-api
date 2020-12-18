import express, { Request, Response } from 'express';
import cors from 'cors';
import routerApi from './routers/default';
const bodyParser = require('body-parser');
const app = express();
const log = require('debug')('api:main');


app.use((request:Request, response:Response, next) => {
    console.log(request.query, `Request feita em: ${new Date().toISOString}`)
    next()
})

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())
app.use(cors())
app.use(routerApi)

app.listen(5000,()=>{console.log('Servidor rodando: http://127.0.0.1:5000')})