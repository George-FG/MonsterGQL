import { getMonsterByNameLib } from '../../../lib/monsterHelpers'
import { Resolvers } from '../../../lib/types/generated'

export const monsterResolvers: Partial<Resolvers> = {
  Query: {
    getMonsterByName: (_: unknown, args) => getMonsterByNameLib(args.name),
  },
}
