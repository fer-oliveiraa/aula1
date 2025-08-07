const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.json({message: 'Hello world'});
});

app.get('/hello/:nome', (req, res) => {
    const nome = req.params.nome;
    res.json({message: `Hello ${nome}!`});
});

app.get('/pesquisa', (req, res) => {
    const nome = req.query.nome;
    const sobrenome = req.query.sobrenome;
    const mensagem = `${nome} ${sobrenome}`;
    res.json({message: `hello ${mensagem}`});
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
