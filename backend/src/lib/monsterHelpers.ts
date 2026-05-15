import { Context } from './context'
import { validateMonsterType } from './typeValidation'

export const getMonsterByNameLib = (targetName: string, ctx: Context) => {
  try {
    const targetMonster = ctx.prisma.monsterDrink.findUniqueOrThrow({
      where: { name: targetName },
    })

    if (validateMonsterType(targetMonster)) {
      return targetMonster
    } else {
      throw new Error('Invalid monster returned')
    }
  } catch (error) {
    console.error('Error fetching monster:', error)
    throw new Error('Failed to fetch monster', { cause: error })
  }
}
