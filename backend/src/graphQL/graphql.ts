import { ApolloServer } from '@apollo/server'

import { Context } from '../lib/context'
import { resolvers } from './schema/resolvers/index'
import { typeDefs } from './schema/typeDefs'

const schema = { typeDefs, resolvers }

export const runGqlServer = async () => {
  const server = new ApolloServer<Context>(schema)
  await server.start()

  return server
}
