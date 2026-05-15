import { MonsterDrink } from './types/generated'

export const validateMonsterType = (object: unknown): object is MonsterDrink => {
  if (typeof object !== 'object' || object === null) {
    return false
  }

  if (
    Object.prototype.hasOwnProperty.call(object, 'id') &&
    typeof (object as Record<string, unknown>).id === 'string' &&
    Object.prototype.hasOwnProperty.call(object, 'name') &&
    typeof (object as Record<string, unknown>).name === 'string' &&
    Object.prototype.hasOwnProperty.call(object, 'description') &&
    typeof (object as Record<string, unknown>).description === 'string' &&
    Object.prototype.hasOwnProperty.call(object, 'globalRank') &&
    typeof (object as Record<string, unknown>).globalRank === 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'userRank') &&
    (typeof (object as Record<string, unknown>).userRank === 'number' ||
      (object as Record<string, unknown>).userRank === undefined)
  ) {
    return true
  }

  return false
}
