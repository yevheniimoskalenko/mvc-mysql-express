import { Router } from 'express';
const router = Router();

import verefy from '../controllers/verify.controller.js';

router.get('/verefy', verefy);

export default router;
