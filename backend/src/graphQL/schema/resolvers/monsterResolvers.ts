import { getMonsterByNameLib } from '../../../lib/monsterHelpers'
import { Resolvers } from '../../../lib/types/generated'

export const monsterResolvers: Partial<Resolvers> = {
  Query: {
    getMonsterByName: (_: unknown, args, ctx) => getMonsterByNameLib(args.name, ctx),
    getAllMonsterDrinks: async (_: unknown, __: unknown, ctx) => {
      try {
        const allMonsters = await ctx.prisma.monsterDrink.findMany()
        return allMonsters
      } catch (error) {
        console.error('Error fetching all monster drinks:', error)
        throw new Error('Failed to fetch all monster drinks', { cause: error })
      }
    },
  },
  Mutation: {
    addNewMonsterFlavor: async (_: unknown, args, ctx) => {
      try {
        const newMonster = await ctx.prisma.monsterDrink.create({
          data: {
            name: args.name,
            description: args.description,
            globalRank: args.globalRank,
          },
        })

        return newMonster
      } catch (error) {
        console.error('Error adding new monster flavor:', error)
        throw new Error('Failed to add new monster flavor', { cause: error })
      }
    },
  },
}
