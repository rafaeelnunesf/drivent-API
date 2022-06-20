import { prisma } from '@/config';

export async function getActivities(dateId: number) {
  return prisma.activities.findMany({ where: { eventDayId: dateId } });
}
