import 'dotenv/config'

import { PrismaPg } from '@prisma/adapter-pg'

import { PrismaClient } from '../src/generated/prisma/client'
import drinks from '../../localdb/seeds/drinks.json'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

async function seed() {
  console.log(`Seeding ${drinks.length} drinks…`)

  let added = 0
  let skipped = 0

  for (const drink of drinks) {
    const existing = await prisma.monsterDrink.findUnique({ where: { name: drink.name } })

    if (existing) {
      console.log(`  skip  "${drink.name}" (already exists)`)
      skipped++
      continue
    }

    await prisma.monsterDrink.create({
      data: { name: drink.name, description: drink.description, globalRank: 0 },
    })

    console.log(`  added "${drink.name}"`)
    added++
  }

  console.log(`\nDone — ${added} added, ${skipped} skipped.`)
  await prisma.$disconnect()
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
