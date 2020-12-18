import express, { Request, Response } from 'express';
import cors from 'cors';
import routerApi from './routers/default';
import Date from './utils/getDate'
const bodyParser = require('body-parser');
const app = express();
const log = require('debug')('api:main');

const PORT : string|number = process.env.PORT || 5000;
app.use((request:Request, response:Response, next) => {
    log(request.query, `Request at: ${Date()}`)
    next()
})

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())
app.use(cors())
app.use(routerApi)

app.listen(PORT,()=>{console.log('Servidor rodando: http://127.0.0.1:5000')})