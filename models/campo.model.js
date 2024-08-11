const mongoose = require('mongoose');

const campoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: false
    },
    tipo: {
        type: String,
        required: true
    },
    tabela: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tabela',
        required: true
    }
});

const Campo = mongoose.model('Campo', campoSchema);
module.exports = Campo;