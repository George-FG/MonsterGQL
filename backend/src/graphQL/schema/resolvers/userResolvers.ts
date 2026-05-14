import { Resolvers } from '../../../lib/types/generated'

export const userResolvers: Partial<Resolvers> = {
  Query: {
    logInByNameAndPassword: (_: unknown, args) => {
      return true
    },
  },
}
