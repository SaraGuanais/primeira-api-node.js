const express = require('express')
const routes = express.Router()


let db = [
    { '1': { Nome: 'Cliente 1', Idade: '20'} },
    { '2': { Nome: 'Cliente 2', Idade: '20'} },
    { '3': { Nome: 'Cliente 3', Idade: '20'} },
]


//buscar dados

routes.get('/', (req, res) => {
    return res.json(db)
} )

//inserir dados

routes.post('/add', (req, res) => {
    const body = req.body

        if(!body)
            return res.status(400).end()
        
         db.push(body)
         return res.json(body)

})

routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => !item[id])

    if (newDB.length === db.length) {
        return res.status(404).send('ID não encontrado no banco de dados')
    }

    db = newDB

    return res.json(newDB)
})


module.exports = routes