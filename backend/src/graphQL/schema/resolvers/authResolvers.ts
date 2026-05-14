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

      return { id: user.id, email: user.email }
    },
  },

  Mutation: {
    signup: async (_: unknown, args: { email: string; password: string }, ctx: Context) => {
      const existing = await ctx.prisma.user.findUnique({ where: { email: args.email } })

      if (existing) throw new Error('An account with that email already exists')

      const hashed = await hashPassword(args.password)

      const user = await ctx.prisma.user.create({
        data: { email: args.email, password: hashed },
      })

      const token = generateSessionToken()

      await ctx.prisma.session.create({
        data: { token, userId: user.id, expiresAt: sessionExpiresAt() },
      })

      return { token, user }
    },

    login: async (_: unknown, args: { email: string; password: string }, ctx: Context) => {
      const user = await ctx.prisma.user.findUnique({ where: { email: args.email } })

      if (!user) throw new Error('Invalid email or password')

      const valid = await verifyPassword(args.password, user.password)

      if (!valid) throw new Error('Invalid email or password')

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
