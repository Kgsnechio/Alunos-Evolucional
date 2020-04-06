const connection = require('../database/connection')

module.exports = {

    async create(request,response) {     // essa é uma rota gera uma classe no banco de dados 
        const { id, classeName } = request.body
    
        await connection('classes').insert({
            id,
            classeName
        })
        
        return response.json({ classeName })
    }
}