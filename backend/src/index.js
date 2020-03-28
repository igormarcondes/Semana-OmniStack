const express = require('express');
const cors = require("cors");
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
/*
* Método http
* GET: buscar informacao no back
* POST: criar uma informação no back
* PUT: alterar uma informação no back
* DELETE: deletear uma informação no back
*
* Query params: parametros nomeados enviados na roda apos ? filtros paginacao
* Route params: parametros utilizados para indentificar recurosos
* Request body: corpo da requisicao, utilizado para criar ou alterar
*/


app.listen(3333)