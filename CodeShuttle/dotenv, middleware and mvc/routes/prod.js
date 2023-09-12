const router =  require('express').Router();

const { prodAddController,getProdController,prodDeleteController } = require('../controllers/prod');

router.post('/prod',prodAddController);
router.get('/prodid/:id',getProdController);
router.get('delprod/:id',prodDeleteController);

module.exports = router;
