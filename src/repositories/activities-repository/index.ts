import { prisma } from '@/config';

export async function getActivities(dateId: number) {
  return prisma.activities.findMany({
    where: { eventDayId: dateId },
    select: {
      id: true,
      local: true,
      startTime: true,
      endTime: true,
      name: true,
      seats: true,
      _count: {
        select: { ActivitySeats: true },
      },
    },
  });
}
