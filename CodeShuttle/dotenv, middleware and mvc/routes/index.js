const router = require('express').Router();
const log = require('../middlewares/Loggers');

const postRouter = require("./post");
const authRouter = require("./auth");
const prodRouter = require("./prod");

router.use('/post',postRouter);
router.use('/auth', log,authRouter);
router.use('/products',log,prodRouter)

module.exports = router;