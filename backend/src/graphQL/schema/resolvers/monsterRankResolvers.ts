import { Resolvers } from '../../../lib/types/generated'

export const monsterRankResolvers: Partial<Resolvers> = {
  Query: {
    getMonsterFanRank: (_, unknown, args, ctx) => {
      // Implement logic to fetch the fan rank for a specific monster drink based on the provided monsterDrinkId
    },
    getUsersRankForMonster: (_, unknown, args, ctx) => {
      // Implement logic to fetch the ranks of all users for a specific monster drink based on the provided monsterDrinkId
    },
    getRanksForMonsterFan: (_, unknown, args, ctx) => {
      // Implement logic to fetch the ranks of all monster drinks for a specific monster fan based on the provided monsterFanId
    },
  },
  Mutation: {
    addNewMonsterFanRank: (_, unknown, args, ctx) => {
        //add new rank for a monster drink for a specific user
  },
}
