const Campo = require('../../models/campo.model');
const { Response } = require('../../models/response');

async function findAll() {
    try {
        const campos = await Campo.find();
        console.log(campos);
        resp = new Response({
            success: true,
            data: campos,
            message: 'Campos encontrados com sucesso',
            code: '200',
            errors: []
        });

        return resp;

    } catch (err) {
        resp = new Response({
            success: false,
            data: {},
            message: 'Erro ao buscar os campos',
            code: '500',
            errors: [{ message: err.message }]
        });
        return resp;

    }
}

async function findById(id) {
    try {
        const campo = await Campo.findById(id);
        resp = new Response({
            success: true,
            data: campo,
            message: 'Campo encontrado com sucesso',
            code: '200',
            errors: []
        });
        return resp;
    } catch (err) {
        resp = new Response({
            success: false,
            data: {},
            message: 'Erro ao buscar o campo',
            code: '500',
            errors: [{ message: err.message }]
        });
        return resp;
    }
}

async function create(campo) {
    try {
        const cp = await Campo.create(campo);
        cp.save();
        resp = new Response({
            success: true,
            data: cp,
            message: 'Campo criado com sucesso',
            code: '200',
            errors: []
        });
        return resp;
    } catch (err) {
        resp = new Response({
            success: false,
            data: {},
            message: 'Erro ao criar o campo',
            code: '500',
            errors: [{ message: err.message }]
        });
        return resp;
    }
}

async function update(id, campo) {
    try {
        const cp = await Campo.findByIdAndUpdate(id, campo, { new: true });
        resp = new Response({
            success: true,
            data: cp,
            message: 'Campo atualizado com sucesso',
            code: '200',
            errors: []
        });
        return resp;
    }
    catch (err) {
        resp = new Response({
            success: false,
            data: {},
            message: 'Erro ao atualizar o campo',
            code: '500',
            errors: [{ message: err.message }]
        });
        return resp;
    }
}

async function remove(id) {
    try {
        const cp = await Campo.findByIdAndDelete(id);
        resp = new Response({
            success: true,
            data: cp,
            message: 'Campo removido com sucesso',
            code: '200',
            errors: []
        });
        return resp;
    } catch (err) {
        resp = new Response({
            success: false,
            data: {},
            message: 'Erro ao remover o campo',
            code: '500',
            errors: [{ message: err.message }]
        });
        return resp;
    }
}

const CampoService = {
    findAll,
    findById,
    create,
    update,
    remove	
}

module.exports = CampoService;