"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const covid_1 = __importDefault(require("./routers/covid"));
const bodyParser = require('body-parser');
const app = express_1.default();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors_1.default());
app.use(covid_1.default);
app.listen(3333, () => { console.log('Servidor rodando: http://127.0.0.1:3333'); });
