// resolver types within here

import { monsterResolvers } from "./monsterResolvers";

export const resolvers = {
  Query: {
    ...monsterResolvers.Query,
  },
};
