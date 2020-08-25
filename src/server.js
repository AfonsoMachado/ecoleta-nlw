const express = require('express')
const server = express()
const port = 3000
const db = require('./database/db');

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

  // consultando dados
  db.all(`SELECT * FROM places`, function (err, rows) {
    if (err) {
      return console.log(err);
    }
    const total = rows.length

    //console.log("Aqui estão seus registros:")
    //console.log(rows);
    //  mostrar a pagina html com os dados do banco de dados
    return res.render('search-results.html', { places: rows, total: total })
  })
})

server.listen(port)
console.log(`Servidor executando na porta ${port}`);