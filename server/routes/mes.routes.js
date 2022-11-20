const Router = require('express');
const router = new Router();
const mesController = require('../controller/mes.controller');

router.post('/mes', mesController.createMes);
router.get('/mes/:link', mesController.getMes);

// router.delete('/mes/:id', mesController.deleteMes);

module.exports = router;
