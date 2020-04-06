const connection = require('../database/connection')

module.exports = {
    
    async create(request,response) {     // essa é uma rota gera um aluno no banco de dados 
        const { id, degreeName } = request.body
    
        await connection('degrees').insert({
            id,
            degreeName
        })
        
        return response.json({ degreeName })
    }
}