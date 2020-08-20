const express = require('express')
const server = express()
const port = 3000

// acessando pasta publica
server.use(express.static("public"))

// ROTAS

// respondendo a pagina index.html
server.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

server.get('/create-point', (req, res) => {
  res.sendFile(__dirname + '/views/create-point.html')
})

server.listen(port)
console.log(`Servidor executando na porta ${port}`);