const express = require('express')
const alunoController = require('./controllers/alunoController')
const degreesController = require('./controllers/degreesController')
const classesController = require('./controllers/classesCrontroller')

const routes = express.Router()

routes.get('/', alunoController.index) //essa rota lista os alunos existentes no banco de dados
routes.post('/', alunoController.create) // essa é uma rota gera um aluno no banco de dados

routes.post('/degrees', degreesController.create)
routes.post('/classes', classesController.create)

module.exports = routes