import autores from "../models/Livro.js";


class AutoresController {

    static listarAutores = (req,res) => {
        autores.find((err, autores) =>{
            res.status(200).json(autores)
        })
    }
    static listarAutorId = (req, res) => {
        const id = req.params.id;
        autores.findById(id,(err, autores) =>{
            if (err) {
                res.status(400).send({message: `${err.message}  - Falha ao encontrar livro`})
            } else {
                res.status(200).json(autores)
            }
        })
    }
    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
        autor.save((err)=>{
            if (err) {
                res.status(500).send({message: `${err.message}  - Falha ao cadastrar livro`});
            }else{
                res.status(201).send(autor.toJSON());
            }
        })
    }
    static atualizarAutor = (req, res) => {
        const id = req.params.id
        //localiza pelo id e atualiza
        autores.findByIdAndUpdate(id, {$set: req.body },(err) => {
            if(!err){
                res.status(200).send({message: "Atualizado com sucesso"});
            }else{
                res.status(500).send({message: `${err.message}  - Falha ao atualizar livro`});
            }
        })
    }
    static deleteAutor = (req, res) => {
        autores.findByIdAndDelete(id,(err) =>{
            if (!err) {
                res.status(200).send({message: "Detelado com sucesso"});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }
}


export default AutoresController;