import { Router } from 'express';

const router = Router();

router.use('/api/v1', require('./api/v1').default);

export default router;
