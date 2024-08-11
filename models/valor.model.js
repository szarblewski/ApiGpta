const mongoose = require('mongoose');

const valorSchema = new mongoose.Schema({
    registro: {
        type: Number,
        required: true
    },
    valor: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    campo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campo',
        required: true
    },
    tabela: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tabela',
        required: true
    }
});

const Valor = mongoose.model('Valor', valorSchema);
module.exports = Valor;