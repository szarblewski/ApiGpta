const mongoose = require('mongoose');

const areatbSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: false
    },
    tabelas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tabela',
        required: true
    }]
});

const Areatb = mongoose.model('Areatb', areatbSchema);
module.exports = Areatb;