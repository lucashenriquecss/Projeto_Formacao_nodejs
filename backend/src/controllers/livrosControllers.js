import livros from "../models/Livro.js";


class LivroController {

    static listarLivros = (req,res) => {
        livros.find()
            .populate('autor')
        execute((err, livros) => {
            res.status(200).json(livros)
        })
    }
    static listarLivroId = (req, res) => {
        const id = req.params.id;
        livros.findById(id)
            .populate('autor','nome')
            execute((err, livros) =>{
                if (err) {
                    res.status(400).send({message: `${err.message}  - Falha ao encontrar livro`})
                } else {
                    res.status(200).json(livros)
                }
        })
    }
    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err)=>{
            if (err) {
                res.status(500).send({message: `${err.message}  - Falha ao cadastrar livro`});
            }else{
                res.status(201).send(livro.toJSON());
            }
        })
    }
    static atualizarLivro = (req, res) => {
        const id = req.params.id
        //localiza pelo id e atualiza
        livros.findByIdAndUpdate(id, {$set: req.body },(err) => {
            if(!err){
                res.status(200).send({message: "Atualizado com sucesso"});
            }else{
                res.status(500).send({message: `${err.message}  - Falha ao atualizar livro`});
            }
        })
    }
    static deleteLivro = (req, res) => {
        livros.findByIdAndDelete(id,(err) =>{
            if (!err) {
                res.status(200).send({message: "Detelado com sucesso"});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }
    static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora
        livros.find({'editora': editora},{},(err,livros) =>{
           res.status(200).send(livros);
        })
    }
}


export default LivroController;