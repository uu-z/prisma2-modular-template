import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const user1 = await prisma.users.create({
    data: {
      email: 'alice@prisma.io',
      name: 'Alice',
      password: '$2b$10$ZjONRZAxqX2pLoPax2xdcuzABTUEsFanQI6yBYCRtzpRiU4/X1uIu', // "graphql"
      posts: {
        create: {
          title: 'Watch the talks from Prisma Day 2019',
          content: 'https://www.prisma.io/blog/z11sg6ipb3i1/',
          published: true,
        },
      },
    },
  })
  const user2 = await prisma.users.create({
    data: {
      email: 'bob@prisma.io',
      name: 'Bob',
      password: '$2b$10$o6KioO.taArzboM44Ig85O3ZFZYZpR3XD7mI8T29eP4znU/.xyJbW', // "secret43"
      posts: {
        create: [
          {
            title: 'Subscribe to GraphQL Weekly for community news',
            content: 'https://graphqlweekly.com/',
            published: true,
          },
          {
            title: 'Follow Prisma on Twitter',
            content: 'https://twitter.com/prisma/',
            published: false,
          },
        ],
      },
    },
  })
  console.log({ user1, user2 })
}

main().finally(async () => {
  await prisma.disconnect()
})
