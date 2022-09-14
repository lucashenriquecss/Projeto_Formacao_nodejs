import express, { Router } from 'express';
import LivroController from '../controllers/livrosControllers.js';


const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/busca", LivroController.listarLivroPorEditora)
    .get("/livros/:id", LivroController.listarLivroId)
    .post("/livros",LivroController.cadastrarLivro)
    .put("/livros/:id",LivroController.atualizarLivro)
    .delete("/livros/:id",LivroController.deleteLivro)


export default router;