import express from "express";

const app = express();
// app responsavel pelas rotas

const livros = [
    {id: 1,"titulo":"teste0"},
    {id: 2,"titulo":"teste0"},
]


app.get('/', (req, res) => {
    res.status(200).send('Bem vindo a livraria!')
  })
  
app.get('/livros', (req, res) => {
      res.status(200).json(livros)
})

export default app; 