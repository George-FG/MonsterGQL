import { getMonsterByNameLib, updateGlobalRankForMonsterLib } from '../../../lib/monsterHelpers'
import { Resolvers } from '../../../lib/types/generated'

export const monsterResolvers: Partial<Resolvers> = {
  Query: {
    getMonsterByName: (_: unknown, args) => getMonsterByNameLib(args.name),
  },
  Mutation: {
    updateGlobalRankForMonster: (_: unknown, args) =>
      updateGlobalRankForMonsterLib(args.monsterDrinkName, args.userRank),
  },
}
