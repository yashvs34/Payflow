const express = require('express');
import userRouter from './userRouter';
import accountRouter from './accounRouter';

const router = express.Router();

router.use('/user', userRouter);
router.use('/account', accountRouter);

module.exports = router;