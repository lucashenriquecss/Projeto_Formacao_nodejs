import mongoose from "mongoose";


const autorSchema = new mongoose.Schema(
    {
        id: { type :String},
        nome: {type :String, required:true},
        nacionalidade: {type:String},
    },
    { //versionando modelos para caso inclua novo atributo ou campo para ser requerido
        versionKey: false,
    }

);
//variavel que vai ser exportada para outros arquivos
const autores = mongoose.model('autor', autorSchema);

export default autores;