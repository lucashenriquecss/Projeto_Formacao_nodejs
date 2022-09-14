import mongoose from "mongoose";


const livroSchema = new mongoose.Schema({
    id: { type :String},
    titulo: {type :String, required:true},
    author: {type:mongoose.Schema.Types.ObjectId, ref:'autores',required:true},//referenciando com outra tabela
    editor: {type:String, required:true},
    pages: {type:Number}
    

});
//variavel que vai ser exportada para outros arquivos
const livros = mongoose.model('livros', livroSchema);

export default livros;