const Valor = require('../../models/valor.model');
const { Response } = require('../../models/response');

async function findAll() {
    try {
        const valores = await Valor.find();
        console.log(valores);
        resp = new Response({
            success: true,
            data: valores,
            message: 'Valores encontrados com sucesso',
            code: '200',
            errors: []
        });

        return resp;

    } catch (err) {
        resp = new Response({
            success: false,
            data: {},
            message: 'Erro ao buscar os valores',
            code: '500',
            errors: [{ message: err.message }]
        });
        return resp;

    }
}

async function findById(id) {
    try {
        const valor = await Valor.findById(id);
        resp = new Response({
            success: true,
            data: valor,
            message: 'Valor encontrado com sucesso',
            code: '200',
            errors: []
        });
        return resp;
    } catch (err) {
        resp = new Response({
            success: false,
            data: {},
            message: 'Erro ao buscar o valor',
            code: '500',
            errors: [{ message: err.message }]
        });
        return resp;
    }
}

async function create(valor) {
    try {
        const existingValor = await Valor.findOne({ campo: valor.campo, tabela: valor.tabela, registro: valor.registro });
        if (existingValor) {
            const updatedValor = await Valor.findByIdAndUpdate(existingValor._id, valor, { new: true });
            resp = new Response({
                success: true,
                data: updatedValor,
                message: 'Valor atualizado com sucesso',
                code: '200',
                errors: []
            });
        } else {
            const createdValor = await Valor.create(valor);
            createdValor.save();
            resp = new Response({
                success: true,
                data: createdValor,
                message: 'Valor criado com sucesso',
                code: '200',
                errors: []
            });
        }
        
        return resp;
    } catch (err) {
        resp = new Response({
            success: false,
            data: {},
            message: 'Erro ao criar o valor',
            code: '500',
            errors: [{ message: err.message }]
        });
        return resp;
    }
}

async function update(id, valor) {
    try {
        const vl = await Valor.findByIdAndUpdate(id, valor, { new: true });
        resp = new Response({
            success: true,
            data: vl,
            message: 'Valor atualizado com sucesso',
            code: '200',
            errors: []
        });
        return resp;
    }
    catch (err) {
        resp = new Response({
            success: false,
            data: {},
            message: 'Erro ao atualizar o valor',
            code: '500',
            errors: [{ message: err.message }]
        });
        return resp;
    }
}

async function remove(id) {
    try {
        const vl = await Valor.findByIdAndRemove(id);
        resp = new Response({
            success: true,
            data: vl,
            message: 'Valor removido com sucesso',
            code: '200',
            errors: []
        });
        return resp;
    } catch (err) {
        resp = new Response({
            success: false,
            data: {},
            message: 'Erro ao remover o valor',
            code: '500',
            errors: [{ message: err.message }]
        });
        return resp;
    }
}

async function findByFieldAndTable(field, table) {
    try {
        const valor = await Valor.find({ campo: field, tabela: table });
        resp = new Response({
            success: true,
            data: valor,
            message: 'Valor encontrado com sucesso',
            code: '200',
            errors: []
        });
        return resp;
    } catch (err) {
        resp = new Response({
            success: false,
            data: {},
            message: 'Erro ao buscar o valor',
            code: '500',
            errors: [{ message: err.message }]
        });
        return resp;
    }
}


module.exports = {
    findAll,
    findById,
    create,
    update,
    remove,
    findByFieldAndTable
};