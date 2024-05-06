const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const db = new sqlite3.Database('./contatoDB.sqlite', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados SQLite');
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS contatos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      email TEXT,
      mensagem TEXT
    )
  `);
});


app.post('/api/contato', (req, res) => {
  const { nome, email, mensagem } = req.body;
  const sql = 'INSERT INTO contatos (nome, email, mensagem) VALUES (?, ?, ?)';
  db.run(sql, [nome, email, mensagem], function(err) {
    if (err) {
      console.error('Erro ao enviar mensagem:', err.message);
      res.status(500).json({ error: 'Erro ao enviar mensagem' });
    } else {
      console.log('Mensagem enviada com sucesso! ID:', this.lastID);
      res.status(201).json({ message: 'Mensagem enviada com sucesso!' });
    }
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
