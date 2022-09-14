import express, { Router } from 'express';
import AutoresController from '../controllers/autoresControllers.js';


const router = express.Router();

router
    .get("/autores", AutoresController.listarAutores)
    .get("/autores/:id", AutoresController.listarAutorId)
    .post("/autores",AutoresController.cadastrarAutor)
    .put("/autores/:id",AutoresController.atualizarAutor)
    .delete("/autores/:id",AutoresController.deleteAutor)


export default router;