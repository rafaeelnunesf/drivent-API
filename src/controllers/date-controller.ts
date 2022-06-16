import { Response } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import httpStatus from 'http-status';
import { getEventDaysInfo } from '@/services/date-service';

export async function getAllEventDays(req: AuthenticatedRequest, res: Response) {
  const eventDays = await getEventDaysInfo();

  res.send(eventDays).status(httpStatus.OK);
}
