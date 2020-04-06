const connection = require('../database/connection')

module.exports = {
    async index(request,response) {
        const alunos = await connection('students')
        .join('degrees', 'degrees.id', '=', 'students.degreeId')
        .join('classes', 'classes.id', '=', 'students.classId')
        .select([
                'students.*',
                'degrees.degreeName',
                'classes.classeName'
            ])
        
        return response.json(alunos)
    },

    async create(request,response) {     // essa é uma rota gera um aluno no banco de dados 
        const { ra, name, degreeId, classId } = request.body

        await connection('students').insert({
            ra,
            name,
            degreeId,
            classId
        })
    
        return response.json({ name })
    }
}