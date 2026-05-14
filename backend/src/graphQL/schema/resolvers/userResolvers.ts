import { MonsterFan, Resolvers } from '../../../lib/types/generated'
import { getUsersRankedMonstersLib, logInUser } from '../../../lib/userHelpers'

export const userResolvers: Partial<Resolvers> = {
  Query: {
    logInByNameAndPassword: (_: unknown, args) => logInUser(args.userName, args.password),
  },
  MonsterFan: {
    rankedMonsters: (parent: MonsterFan) => getUsersRankedMonstersLib(parent.id),
  },
}
