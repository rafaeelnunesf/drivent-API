import { Response } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import httpStatus from 'http-status';
import { getAllActivities } from '@/services/activities-service';

export async function getActivities(req: AuthenticatedRequest, res: Response) {
  const dateId = parseInt(req.params.dateId);
  const activities = await getAllActivities(dateId);

  res.send(activities).status(httpStatus.OK);
}
