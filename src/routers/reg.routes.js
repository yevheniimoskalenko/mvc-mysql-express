import { Router } from 'express';
import login from '../controllers/reg.controller.js';
const router = Router();
router.post('/reg', login);

export default router;
