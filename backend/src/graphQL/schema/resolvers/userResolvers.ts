import { Resolvers } from '../../../lib/types/generated'
import { logInUser } from '../../../lib/userHelpers'

export const userResolvers: Partial<Resolvers> = {
  Query: {
    logInByNameAndPassword: (_: unknown, args) => logInUser(args.userName, args.password),
  },
}
