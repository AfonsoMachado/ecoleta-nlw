const express = require('express')
const server = express()
const port = 3000

// acessando pasta publica
server.use(express.static("public"))

// TEMPLATE ENGINE
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})

// ROTAS

// respondendo a pagina index.html
server.get('/', (req, res) => {
  // render ja entende a presença do nunjucks
  return res.render('index.html', { title: 'Um titulo' })
})

server.get('/create-point', (req, res) => {
  return res.render('create-point.html')
})

server.get('/search', (req, res) => {
  return res.render('search-results.html')
})

server.listen(port)
console.log(`Servidor executando na porta ${port}`);