import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@as-integrations/express5'
import cors from 'cors'
import express from 'express'

import { Context } from '../lib/context'
import prisma from '../lib/prisma'

const extractBearerToken = (authHeader: string | undefined): string | null => {
  if (!authHeader?.startsWith('Bearer ')) return null

  return authHeader.slice(7) || null
}

const buildContext = async (authHeader: string | undefined): Promise<Context> => {
  const sessionToken = extractBearerToken(authHeader)

  if (!sessionToken) return { prisma, userId: null, sessionToken: null }

  const session = await prisma.session.findUnique({
    where: { token: sessionToken, expiresAt: { gt: new Date() } },
  })

  return { prisma, userId: session?.userId ?? null, sessionToken }
}

export const runHttpServer = async (server: ApolloServer<Context>) => {
  const app = express()
  const port = 3000

  app.get('/', (_, res) => {
    res.send('Navigate to /graphql for apollo!')
  })

  app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => buildContext(req.headers.authorization),
    })
  )

  new Promise(function (resolve, _reject) {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`)
      resolve(app)
    })
  })
}
