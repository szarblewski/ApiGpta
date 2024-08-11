const router = require('express').Router();
const CampoService = require('../../services/estrutura/campo.service');

router.get('/', all);
router.get('/:id', findById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

async function all(req, res) {
    CampoService.findAll().then((resp) => {
        res.send(resp);
    }
    );
}

async function findById(req, res) {
    CampoService.findById(req.params.id).then((resp) => {
        res.send(resp);
    }
    );
}

async function create(req, res) {
    CampoService.create(req.body).then((resp) => {
        res.send(resp);
    }
    );
}

async function update(req, res) {
    CampoService.update(req.params.id, req.body).then((resp) => {
        res.send(resp);
    }
    );
}

async function remove(req, res) {
    CampoService.remove(req.params.id).then((resp) => {
        res.send(resp);
    }
    );
}

module.exports = router;

