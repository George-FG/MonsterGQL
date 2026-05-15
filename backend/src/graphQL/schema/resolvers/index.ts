import { authResolvers } from './authResolvers'
import { monsterResolvers } from './monsterResolvers'

export const resolvers = {
  Query: {
    ...monsterResolvers.Query,
    ...authResolvers.Query,
  },
  Mutation: {
    ...authResolvers.Mutation,
    ...monsterResolvers.Mutation,
  },
}
