import { getActivities } from '@/repositories/activities-repository';

export async function getAllActivities(dateId: number) {
  const activities = await getActivities(dateId);

  return activities;
}
