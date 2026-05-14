// resolver types within here

import { monsterResolvers } from './monsterResolvers'
import { userResolvers } from './userResolvers'

export const resolvers = {
  Query: {
    ...monsterResolvers.Query,
    ...userResolvers.Query,
  },
}
