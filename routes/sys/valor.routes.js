const router = require('express').Router();
const ValorService = require('../../services/estrutura/valor.service');

router.get('/', all);
router.get('/:id', findById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

async function all(req, res) {
    ValorService.findAll().then((resp) => {
        res.send(resp);
    }
    );
}

async function findById(req, res) {
    ValorService.findById(req.params.id).then((resp) => {
        res.send(resp);
    }
    );
}

async function create(req, res) {
    ValorService.create(req.body).then((resp) => {
        res.send(resp);
    }
    );
}

async function update(req, res) {
    ValorService.update(req.params.id, req.body).then((resp) => {
        res.send(resp);
    }
    );
}

async function remove(req, res) {
    ValorService.remove(req.params.id).then((resp) => {
        res.send(resp);
    }
    );
}

module.exports = router;