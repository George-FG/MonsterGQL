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
  // this is not how it will be handled, we will instead need to point to db entry containing at least the names of monsters for a given person
  return [getMonsterByNameLib(id.toString())]
}
