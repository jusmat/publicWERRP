import express      from 'express';

const router = express.Router();

router.use('/', require('../app/controllers/index'));

export default router;
