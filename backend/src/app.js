import express from "express";

const app = express();

app.use(express.json())
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

app.get('/livros/:id', (req, res) => {
  let index = buscarLivros(req.params.id);
  res.json(livros[index]);
});

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('Livro criado')
})

app.put('/livros/:id', (req, res) => {
    let index = buscarLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
});

app.delete('/livros/:id', (req, res) => {
  let{id} = req.params.id;
  let index = buscarLivros(id);
  livros.splice(index, 1);//apagando somente um
  res.send(`Livros ${id} removido`);
});


const buscarLivros = (id) => {
  return livros.findIndex(livro => livro.id == id)
}

export default app; 