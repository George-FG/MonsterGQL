import { Resolvers } from '../../../lib/types/generated'

export const monsterResolvers: Partial<Resolvers> = {
  Query: {
    getMonsterByName: (_: unknown, args) => ({
      name: args.name,
      description: 'yummy',
    }),
  },
}
