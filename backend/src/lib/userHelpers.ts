import { getMonsterByNameLib } from './monsterHelpers'
import { MonsterDrink } from './types/generated'

export const logInUser = (userName: string, password: string): boolean => {
  if (!!userName && !!password) {
    return true
  } else {
    return false
  } // WIP
}

export const getUsersRankedMonstersLib = (id: number): MonsterDrink[] => {
  return [getMonsterByNameLib('test')]
}
