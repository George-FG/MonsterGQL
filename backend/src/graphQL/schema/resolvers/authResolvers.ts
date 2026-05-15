import {
  generateSessionToken,
  hashPassword,
  sessionExpiresAt,
  verifyPassword,
} from '../../../lib/auth'
import { Context } from '../../../lib/context'
import { Resolvers } from '../../../lib/types/generated'

export const authResolvers: Partial<Resolvers> = {
  Query: {
    me: async (_: unknown, _args: unknown, ctx: Context) => {
      if (!ctx.userId) return undefined

      const user = await ctx.prisma.user.findUnique({ where: { id: ctx.userId } })

      if (!user) return undefined

      return { id: user.id, email: user.email, username: user.username }
    },
  },

  Mutation: {
    signup: async (
      _: unknown,
      args: { email: string; username: string; password: string },
      ctx: Context
    ) => {
      const existingEmail = await ctx.prisma.user.findUnique({ where: { email: args.email } })
      if (existingEmail) throw new Error('An account with that email already exists')

      const existingUsername = await ctx.prisma.user.findUnique({
        where: { username: args.username },
      })
      if (existingUsername) throw new Error('That username is already taken')

      const hashed = await hashPassword(args.password)

      const user = await ctx.prisma.user.create({
        data: { email: args.email, username: args.username, password: hashed },
      })

      const token = generateSessionToken()

      await ctx.prisma.session.create({
        data: { token, userId: user.id, expiresAt: sessionExpiresAt() },
      })

      return { token, user }
    },

    login: async (_: unknown, args: { identifier: string; password: string }, ctx: Context) => {
      const isEmail = args.identifier.includes('@')
      const user = isEmail
        ? await ctx.prisma.user.findUnique({ where: { email: args.identifier } })
        : await ctx.prisma.user.findUnique({ where: { username: args.identifier } })

      if (!user) throw new Error('Invalid credentials')

      const valid = await verifyPassword(args.password, user.password)

      if (!valid) throw new Error('Invalid credentials')

      const token = generateSessionToken()

      await ctx.prisma.session.create({
        data: { token, userId: user.id, expiresAt: sessionExpiresAt() },
      })

      return { token, user }
    },

    logout: async (_: unknown, _args: unknown, ctx: Context) => {
      if (!ctx.sessionToken) return false

      await ctx.prisma.session.deleteMany({ where: { token: ctx.sessionToken } })

      return true
    },
  },
}
