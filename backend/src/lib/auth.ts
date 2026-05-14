import { randomBytes } from 'node:crypto'

import bcrypt from 'bcrypt'

const BCRYPT_ROUNDS = 12
const SESSION_TTL_MS = 14 * 24 * 60 * 60 * 1000

export const hashPassword = (password: string) => bcrypt.hash(password, BCRYPT_ROUNDS)

export const verifyPassword = (password: string, hash: string) => bcrypt.compare(password, hash)

export const generateSessionToken = () => randomBytes(32).toString('hex')

export const sessionExpiresAt = () => new Date(Date.now() + SESSION_TTL_MS)
