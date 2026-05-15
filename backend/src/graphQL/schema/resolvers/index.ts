import { authResolvers } from './authResolvers'
import { monsterRankResolvers } from './monsterRankResolvers'
import { monsterResolvers } from './monsterResolvers'

export const resolvers = {
  Query: {
    ...monsterResolvers.Query,
    ...authResolvers.Query,
    ...monsterRankResolvers.Query,
  },
  Mutation: {
    ...authResolvers.Mutation,
    ...monsterResolvers.Mutation,
    ...monsterRankResolvers.Mutation,
  },
}
