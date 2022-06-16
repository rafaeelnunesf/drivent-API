import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getAllEventDays } from '@/controllers/date-controller';

const dateRouter = Router();

dateRouter.get('/', authenticateToken, getAllEventDays);

export { dateRouter };
