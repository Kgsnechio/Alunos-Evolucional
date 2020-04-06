const express = require('express'); //importa todo o express para dentro de uma variavel
const routes = require('./routes')
const cors = require('cors')

const app = express(); //Declara q a aplicação vai trabalha com o express

app.use(cors('http://localhost:3000'))
app.use(express.json())
app.use(routes)

app.listen(3333) //associa a aplicação com a porta localhost:3333