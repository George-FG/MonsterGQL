import { PrismaClient } from '../generated/prisma/client'

export interface Context {
  prisma: PrismaClient
  userId: string | null
  sessionToken: string | null
}
