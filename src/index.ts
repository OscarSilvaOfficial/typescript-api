import express from 'express';
import cors from 'cors';
import routerCovid from './routers/covid';
import routerApi from './routers/api';
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json())
app.use(cors())
app.use(routerCovid)
app.use(routerApi)

app.listen(3333,()=>{console.log('Servidor rodando: http://127.0.0.1:3333')})