const router = require('express').Router();
const { loginController,signupController,getUserController} = require('../controllers/auth');

router.post('/login',loginController);

router.post('/signup' ,signupController);

router.get('/user/:id',getUserController);

module.exports = router;