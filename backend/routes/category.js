const express = require('express');
const router = express.Router();

//  MVC arquitectura
const { list, create } = require('../controllers/categoryController');

router.get('/categories', list);
router.post('/create', create);

module.exports = router;