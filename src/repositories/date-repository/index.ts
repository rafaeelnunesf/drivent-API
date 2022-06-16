import { prisma } from '@/config';

export async function getEventDays() {
  return prisma.eventDay.findMany();
}
