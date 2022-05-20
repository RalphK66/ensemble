import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const movies = [
  {
    title: 'Braveheart',
    description:
      'Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.',
    release: 1995,
    duration: "178 min",
    likes: 100,
    dislikes: 4,
  },
  {
    title: 'The Patriot',
    description:
      'Peaceful farmer Benjamin Martin is driven to lead the Colonial Militia during the American Revolution when a sadistic British officer murders his son.',
    release: 2000,
    duration: "165 min",
    likes: 10,
  },
  {
    title: 'Gladiator',
    description:
      'Peaceful farmer Benjamin Martin is driven to lead the Colonial Militia during the American Revolution when a sadistic British officer murders his son.',
    release: 2000,
    duration: "155 min",
    likes: 205,
    dislikes: 23,
  },
  {
    title: 'The Count of Monte Cristo',
    description:
      'A young man, falsely imprisoned by his jealous "friend", escapes and uses a hidden treasure to exact his revenge.',
    release: 2002,
    duration: "131 min",
    likes: 85,
    dislikes: 1,
  },
]

const main = async () => {
  console.log(`Start seeding ...`)
  const deleteUsers = await prisma.movie.deleteMany({})
  for (const m of movies) {
    const movie = await prisma.movie.create({
      data: m,
    })
    console.log(`Created movie with id: ${movie.id}`)
  }
  console.log(`Seeding finished.`)
}

try {
  await main()
} catch (error) {
  console.error('Something went wrong while seeding', error)
} finally {
  await prisma.$disconnect()
}
