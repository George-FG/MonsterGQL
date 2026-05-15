import 'dotenv/config'

import { PrismaPg } from '@prisma/adapter-pg'

import { PrismaClient } from '../src/generated/prisma/client'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

async function clearDrinks() {
  const { count } = await prisma.monsterDrink.deleteMany()
  console.log(`Cleared ${count} drink(s) from the database.`)
  await prisma.$disconnect()
}

clearDrinks().catch((err) => {
  console.error(err)
  process.exit(1)
})
