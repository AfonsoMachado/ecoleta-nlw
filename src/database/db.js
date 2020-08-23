// importando as dependencias do sqlite
const sqlite3 = require('sqlite3').verbose()

// criar o objeto que irá fazer opera~çoes no banco de daods
const db = new sqlite3.Database("./src/database/database.sqlite")

// usando o objeto de banco de dados
// db.serialize(() => {
//   // criando um tabela
//   db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT,
//       address TEXT,
//       address2 TEXT,
//       state TEXT,
//       city TEXT,
//       items TEXT 
//     );
//   `)

//   const query = `
//     INSERT INTO places (
//       image,
//       name,
//       address,
//       address2,
//       state,
//       city,
//       items
//     ) VALUES (?,?,?,?,?,?,?);
//   `

//   const values = [
//     "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
//     "Papersider",
//     "Guilherme Gemballa, Jardim América",
//     "Nº 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Resíduos Eletrônicos, Lâmpadas"
//   ]

//   function afterInsertData(err) {
//     if (err) {
//       return console.log(err);
//     }

//     console.log("Cadastrado com sucesso!");
//     console.log(this);
//   }

//   // inserindo dados
//   db.run(query, values, afterInsertData)

//   // consultando dados
//   // db.all(`SELECT * FROM places`, function (err, rows) {
//   //   if (err) {
//   //     return console.log(err);
//   //   }

//   //   console.log("Aqui estão seus registros:")
//   //   console.log(rows);
//   // })

//   // deletar
//   // db.run(`DELETE FROM places WHERE id = ?`, [1], function (err) {
//   //   if (err) {
//   //     return console.log(err);
//   //   }

//   //   console.log("Registro deletado com sucesso");
//   // })
// })
