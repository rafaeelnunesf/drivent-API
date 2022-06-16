import { getEventDays } from '@/repositories/date-repository';

export async function getEventDaysInfo() {
  const eventDays = await getEventDays();

  return eventDays;
}
