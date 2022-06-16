import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  let hotels = await prisma.hotels.findMany();
  if (hotels.length === 0) {
    await prisma.hotels.createMany({
      data: [
        {
          name: 'Driven Resort',
          image:
            'https://viagemeturismo.abril.com.br/wp-content/uploads/2015/12/188153847.jpg?quality=70&strip=info&w=1024&resize=1200,800',
        },
        {
          name: 'Driven Palace',
          image:
            'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/copacabana-palace.jpeg?quality=70&strip=info&w=1024&resize=1200,800',
        },
        {
          name: 'Driven World',
          image:
            'https://www.agoda.com/wp-content/uploads/2019/02/Best-luxury-hotels-in-Seoul-South-Korea-Lotte-Hotel-World-4.jpg',
        },
      ],
    });
  }
  hotels = await prisma.hotels.findMany();
  let bedrooms = await prisma.bedrooms.findMany();

  if (bedrooms.length === 0) {
    for (let i = 0; i < 16; i++) {
      await prisma.bedrooms.create({
        data: {
          number: i + 1,
          hotelId: hotels[0].id,
          type: 'SINGLE',
        },
      });

      await prisma.bedrooms.create({
        data: {
          number: i + 1,
          hotelId: hotels[1].id,
          type: 'DOUBLE',
        },
      });

      await prisma.bedrooms.create({
        data: {
          number: i + 1,
          hotelId: hotels[2].id,
          type: 'TRIPLE',
        },
      });
    }
  }
  bedrooms = await prisma.bedrooms.findMany();
  const vacancy = await prisma.vacancies.findMany();
  if (vacancy.length === 0) {
    for (let i = 0; i < bedrooms.length; i++) {
      if (bedrooms[i].type === 'SINGLE') {
        await prisma.vacancies.create({
          data: { isAvailable: true, bedroomId: bedrooms[i].id, hotelId: bedrooms[i].hotelId },
        });
      }

      if (bedrooms[i].type === 'DOUBLE') {
        await prisma.vacancies.create({
          data: { isAvailable: true, bedroomId: bedrooms[i].id, hotelId: bedrooms[i].hotelId },
        });

        await prisma.vacancies.create({
          data: { isAvailable: true, bedroomId: bedrooms[i].id, hotelId: bedrooms[i].hotelId },
        });
      }

      if (bedrooms[i].type === 'TRIPLE') {
        await prisma.vacancies.create({
          data: { isAvailable: true, bedroomId: bedrooms[i].id, hotelId: bedrooms[i].hotelId },
        });

        await prisma.vacancies.create({
          data: { isAvailable: true, bedroomId: bedrooms[i].id, hotelId: bedrooms[i].hotelId },
        });

        await prisma.vacancies.create({
          data: { isAvailable: true, bedroomId: bedrooms[i].id, hotelId: bedrooms[i].hotelId },
        });
      }
    }
  }

  const eventDays = await prisma.eventDay.findMany();
  if( eventDays.length === 0) {
    await prisma.eventDay.createMany({
      data: [
        {
          name: 'Sexta, 22/10'
        },
        {
          name: 'Sabado, 23/10'
        },
        {
          name: 'Domingo, 24/10'
        }
      ],
      skipDuplicates: true
    })
  }
  
  const activities = await prisma.activities.findMany();
  if(activities.length === 0) {
    await prisma.activities.createMany({
      data: [
        {
          name: 'R6',
          startTime: '9:00',
          endTime: '11:00',
          local: 'LATERAL',
          eventDayId: 1,
          seats: 30
        },
        {
          name: 'CS:GO',
          startTime: '11:00',
          endTime: '12:00',
          local: 'LATERAL',
          eventDayId: 1,
          seats: 30
        },
        {
          name: 'Valorant',
          startTime: '12:00',
          endTime: '13:00',
          local: 'LATERAL',
          eventDayId: 1,
          seats: 30
        },
        {
          name: 'Call of duty',
          startTime: '9:00',
          endTime: '10:00',
          local: 'MAIN',
          eventDayId: 1,
          seats: 30
        },
        {
          name: 'Destiny',
          startTime: '10:00',
          endTime: '12:00',
          local: 'MAIN',
          eventDayId: 1,
          seats: 30
        },
        {
          name: 'Battlefield',
          startTime: '12:00',
          endTime: '13:00',
          local: 'MAIN',
          eventDayId: 1,
          seats: 30
        },
        {
          name: 'Minecraft',
          startTime: '9:00',
          endTime: '10:00',
          local: 'WORKSHOP',
          eventDayId: 1,
          seats: 30
        },
        {
          name: 'Rust',
          startTime: '10:00',
          endTime: '11:00',
          local: 'WORKSHOP',
          eventDayId: 1,
          seats: 30
        },
        {
          name: 'Deep rock galactic',
          startTime: '11:00',
          endTime: '13:00',
          local: 'WORKSHOP',
          eventDayId: 1,
          seats: 30
        },
        {
          name: 'R6',
          startTime: '9:00',
          endTime: '12:00',
          local: 'LATERAL',
          eventDayId: 2,
          seats: 30
        },
        {
          name: 'CS:GO',
          startTime: '12:00',
          endTime: '13:00',
          local: 'LATERAL',
          eventDayId: 2,
          seats: 30
        },
        {
          name: 'Valorant',
          startTime: '13:00',
          endTime: '14:00',
          local: 'LATERAL',
          eventDayId: 2,
          seats: 0
        },
        {
          name: 'Call of duty',
          startTime: '9:00',
          endTime: '10:00',
          local: 'MAIN',
          eventDayId: 2,
          seats: 30
        },
        {
          name: 'Destiny',
          startTime: '10:00',
          endTime: '11:00',
          local: 'MAIN',
          eventDayId: 2,
          seats: 30
        },
        {
          name: 'Minecraft',
          startTime: '9:00',
          endTime: '10:00',
          local: 'WORKSHOP',
          eventDayId: 2,
          seats: 0
        },
        {
          name: 'Rust',
          startTime: '10:00',
          endTime: '11:00',
          local: 'WORKSHOP',
          eventDayId: 2,
          seats: 30
        },
        {
          name: 'Deep rock galactic',
          startTime: '11:00',
          endTime: '13:00',
          local: 'WORKSHOP',
          eventDayId: 2,
          seats: 0
        },
        {
          name: 'R6',
          startTime: '9:00',
          endTime: '12:00',
          local: 'LATERAL',
          eventDayId: 3,
          seats: 12
        },
        {
          name: 'CS:GO',
          startTime: '12:00',
          endTime: '13:00',
          local: 'LATERAL',
          eventDayId: 3,
          seats: 0
        },
        {
          name: 'Valorant',
          startTime: '13:00',
          endTime: '14:00',
          local: 'LATERAL',
          eventDayId: 3,
          seats: 0
        },
        {
          name: 'Call of duty',
          startTime: '9:00',
          endTime: '10:00',
          local: 'MAIN',
          eventDayId: 3,
          seats: 24
        },
        {
          name: 'Destiny',
          startTime: '10:00',
          endTime: '11:00',
          local: 'MAIN',
          eventDayId: 3,
          seats: 0
        },
        {
          name: 'Battlefield',
          startTime: '11:00',
          endTime: '15:00',
          local: 'MAIN',
          eventDayId: 3,
          seats: 30
        },
        {
          name: 'Minecraft',
          startTime: '9:00',
          endTime: '10:00',
          local: 'WORKSHOP',
          eventDayId: 3,
          seats: 2
        },
        {
          name: 'Rust',
          startTime: '10:00',
          endTime: '11:00',
          local: 'WORKSHOP',
          eventDayId: 3,
          seats: 14
        },
        {
          name: 'Deep rock galactic',
          startTime: '11:00',
          endTime: '13:00',
          local: 'WORKSHOP',
          eventDayId: 3,
          seats: 23
        },
      ],
      skipDuplicates: true
    })
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
