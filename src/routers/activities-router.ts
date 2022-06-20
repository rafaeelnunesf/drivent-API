import { Router } from 'express';
import { getActivities } from '@/controllers/activities-controller';

const activitiesRouter = Router();

activitiesRouter.get('/:dateId', getActivities);

export { activitiesRouter };
