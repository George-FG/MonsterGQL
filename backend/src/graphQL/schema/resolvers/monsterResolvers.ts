import { getMonsterByNameLib } from '../../../lib/monsterHelpers'
import { Resolvers } from '../../../lib/types/generated'

export const monsterResolvers: Partial<Resolvers> = {
  Query: {
    getMonsterByName: (_: unknown, args, ctx) => getMonsterByNameLib(args.name, ctx),
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
