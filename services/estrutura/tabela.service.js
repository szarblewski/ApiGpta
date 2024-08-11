const Tabela = require('../../models/tabela.model');
const {Response}   = require('../../models/response');


async function findAll() {
    
    try {
        const tabelas = await Tabela.find();
        console.log(tabelas);
        resp = new Response({
            success: true,
            data: tabelas,
            message: 'Tabelas encontradas com sucesso',
            code: '200',
            errors: []
        });
                
        return resp;
          
    } catch (err) {
        resp = new Response({
            success: false,
            data: {},
            message: 'Erro ao buscar as tabelas',
            code: '500',
            errors: [{message: err.message}]            
        });
        return resp;
        
    }
}

async function findById(id) {
    try {
        const tabela = await Tabela.findById(id);
        resp = new Response({
            success: true,
            data: tabela,
            message: 'Tabela encontrada com sucesso',
            code: '200',
            errors: []
        });
        return resp;
    } catch (err) {
        resp = new Response({
            success: false,
            data: {},
            message: 'Erro ao buscar a tabela',
            code: '500',
            errors: [{message: err.message}]            
        });
        return resp;
    }
}

async function create(tabela) {
    try {
        const tb = await Tabela.create(tabela);
        tb.save();
        resp = new Response({
            success: true,
            data: tb,
            message: 'Tabela criada com sucesso',
            code: '200',
            errors: []
        });
        return resp;
    } catch (err) {
        resp = new Response({
            success: false,
            data: {},
            message: 'Erro ao criar a tabela',
            code: '500',
            errors: [{message: err.message}]            
        });
        return resp;
    }
}

async function update(id, tabela) {
    try {
        const tb = await Tabela.findByIdAndUpdate(id, tabela, {new: true});
        resp = new Response({
            success: true,
            data: tb,
            message: 'Tabela atualizada com sucesso',
            code: '200',
            errors: []
        });
        return resp;
    }
    catch (err) {
        resp = new Response({
            success: false,
            data: {},
            message: 'Erro ao atualizar a tabela',
            code: '500',
            errors: [{message: err.message}]            
        });
        return resp;
    }
}

async function remove(id) {
    try {
        const tb = await Tabela.findByIdAndDelete(id);
        resp = new Response({
            success: true,
            data: tb,
            message: 'Tabela removida com sucesso',
            code: '200',
            errors: []
        });
        return resp;
    }
    catch (err) {
        resp = new Response({
            success: false,
            data: {},
            message: 'Erro ao remover a tabela',
            code: '500',
            errors: [{message: err.message}]            
        });
        return resp;
    }
}

const TabelaService = {
    findAll,
    findById,
    create,
    update,
    remove
};

module.exports = TabelaService;











