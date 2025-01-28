const express = require('express');
const zod = require('zod');
import userRouter from './userRouter';
import accountRouter from './accounRouter';
import { authMiddleware } from '../middleware';

const router = express.Router();

router.use('/user', userRouter);
router.use('/account', accountRouter);

module.exports = router;