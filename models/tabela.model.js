const mongoose = require('mongoose');

const tabelaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: false
    }
});

const Tabela = mongoose.model('Tabela', tabelaSchema);
module.exports = Tabela;