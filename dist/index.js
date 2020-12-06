"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var tests_1 = __importDefault(require("./tests"));
var app = express_1.default();
app.get('/', function (req, res) {
    return res.send(tests_1.default);
});
app.listen(3333, function () { console.log('Servidor rodando: http://127.0.0.1:3333'); });
