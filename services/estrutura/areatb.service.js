const Areatb = require('../../models/areatb.model');
const { Response } = require('../../models/response');

async function findAll() {
    try {
        const areatbs = await Areatb.find().populate('tabelas');
        //console.log(areatbs);
        resp = new Response({
            success: true,
            data: areatbs,
            message: 'Areatbs encontrados com sucesso',
            code: '200',
            errors: []
        });

        return resp;

    } catch (err) {
        resp = new Response({
            success: false,
            data: {},
            message: 'Erro ao buscar os areatbs',
            code: '500',
            errors: [{ message: err.message }]
        });
        return resp;

    }
}

async function findById(id) {
    try {
        const areatb = await Areatb.findById(id);
        resp = new Response({
            success: true,
            data: areatb,
            message: 'Areatb encontrado com sucesso',
            code: '200',
            errors: []
        });
        return resp;
    } catch (err) {
        resp = new Response({
            success: false,
            data: {},
            message: 'Erro ao buscar o areatb',
            code: '500',
            errors: [{ message: err.message }]
        });
        return resp;
    }
}

async function create(areatb) {
    try {
        const at = await Areatb.create(areatb);
        at.save();
        resp = new Response({
            success: true,
            data: at,
            message: 'Areatb criado com sucesso',
            code: '200',
            errors: []
        });
        return resp;
    } catch (err) {
        resp = new Response({
            success: false,
            data: {},
            message: 'Erro ao criar o areatb',
            code: '500',
            errors: [{ message: err.message }]
        });
        return resp;
    }
}

async function update(id, areatb) {
    try {
        const updatedAreatb = await Areatb.findByIdAndUpdate(id, areatb, { new: true });
        resp = new Response({
            success: true,
            data: updatedAreatb,
            message: 'Areatb atualizado com sucesso',
            code: '200',
            errors: []
        });
        return resp;
    }
    catch (err) {
        resp = new Response({
            success: false,
            data: {},
            message: 'Erro ao atualizar o areatb',
            code: '500',
            errors: [{ message: err.message }]
        });
        return resp;
    }
}

async function remove(id) {
    try {
        const removedAreatb = await Areatb.findByIdAndDelete(id);
        resp = new Response({
            success: true,
            data: removedAreatb,
            message: 'Areatb removido com sucesso',
            code: '200',
            errors: []
        });
        return resp;
    }
    catch (err) {
        resp = new Response({
            success: false,
            data: {},
            message: 'Erro ao remover o areatb',
            code: '500',
            errors: [{ message: err.message }]
        });
        return resp;
    }
}

const AreatbService = {
    findAll,
    findById,
    create,
    update,
    remove
}

module.exports = AreatbService;

