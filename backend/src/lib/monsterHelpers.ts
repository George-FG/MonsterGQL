import { MonsterDrink } from './types/generated'

export const getMonsterByNameLib = (targetName: string): MonsterDrink => {
  return {
    name: targetName,
    description: 'yummy',
    globalRank: 1,
    totalVotes: 1,
  } // this must instead point to real db entry
}

export const updateGlobalRankForMonsterLib = (targetDrinkName: string, userRank: number) => {
  const targetMonster = getMonsterByNameLib(targetDrinkName)
  const currRank = targetMonster.globalRank
  const totalVotes = targetMonster.totalVotes
  const newGlobalRank = (currRank + userRank) / (totalVotes + 1)

  return newGlobalRank
}
