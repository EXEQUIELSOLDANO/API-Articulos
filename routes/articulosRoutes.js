const express = require('express');
const {
    insertArticulo,
    getArticulos,
    updateArticulo,
    deleteArticulo,
} = require('../controllers/articulosController');

const router = express.Router();

router.post('/', insertArticulo);
router.get('/', getArticulos);
router.put('/:id', updateArticulo);
router.delete('/:id', deleteArticulo);

module.exports = router;
