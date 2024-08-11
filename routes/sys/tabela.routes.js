const express = require('express');
const router = express.Router();
const TabelaService = require('../../services/estrutura/tabela.service');

/**
 * @swagger
 * /sys/tabela:
 *   get:
 *     summary: Tabela endpoint
 *     description: Endpoint for tabela
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           text/plain:
 *             schema:
 *               type: Response
 *               example: { success: true, message: 'Tabelas encontradas com sucesso', data: [{_id: '123', nome: 'Tabela 1', descricao: 'Descrição da tabela 1'}, {_id: '124', nome: 'Tabela 2', descricao: 'Descrição da tabela 2'}], errors: [], code: '200' }
 */
router.get('/', all);
router.get('/:id', findById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove)

async function all(req, res) {
    TabelaService.findAll().then((resp) => {
        res.send(resp);
    });
}

async function findById(req, res) {
    TabelaService.findById(req.params.id).then((resp) => {
        res.send(resp);
    }
    );
}

async function create(req, res) {
    
    TabelaService.create(req.body).then((resp) => {
        res.send(resp);
    });
}

async function update(req, res) {
    TabelaService.update(req.params.id, req.body).then((resp) => {
        res.send(resp);
    });
}

async function remove(req, res) {
    TabelaService.remove(req.params.id).then((resp) => {
        res.send(resp);
    });
}


module.exports = router;