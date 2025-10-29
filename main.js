const express = require('express')
const server = express()
const port = 3001

server.use(express.json())

server.get('/', (request, response) => {
    response.send('Resposta do servidor')
})

server.post('/login', (request, response) => {
    const { email, senha } = request.body
    !(email && senha) && response.status(400 ).send('Inválido')
    response.status(200).send('OK')
})


server.listen(port, () => {
    console.log('Serve running')
})