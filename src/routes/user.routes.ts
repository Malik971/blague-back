import express, { RequestHandler } from 'express';
import { createAdmin } from '../controllers/user.controller';

const router = express.Router();

router.post('/admin', (req, res, next) => {
  Promise.resolve(createAdmin(req, res)).catch(next);
});

export default router;
