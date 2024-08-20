const router = require('express').Router();
const AreatbService = require('../../services/estrutura/areatb.service');

router.get('/', all);
router.get('/:id', findById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

async function all(req, res) {
    AreatbService.findAll().then((resp) => {
        res.send(resp);
    }
    );
}

async function findById(req, res) {
    AreatbService.findById(req.params.id).then((resp) => {
        res.send(resp);
    }
    );
}

async function create(req, res) {
    AreatbService.create(req.body).then((resp) => {
        res.send(resp);
    }
    );
}

async function update(req, res) {
    AreatbService.update(req.params.id, req.body).then((resp) => {
        res.send(resp);
    }
    );
}

async function remove(req, res) {
    AreatbService.remove(req.params.id).then((resp) => {
        res.send(resp);
    }
    );
}

module.exports = router;