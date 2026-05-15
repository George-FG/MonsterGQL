import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String']['output'];
  user: User;
};

export type MonsterDrink = {
  __typename?: 'MonsterDrink';
  description: Scalars['String']['output'];
  globalRank: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  monsterFanRanks: Array<MonsterFanRank>;
  name: Scalars['String']['output'];
};

export type MonsterFan = {
  __typename?: 'MonsterFan';
  id: Scalars['Int']['output'];
  rankedMonsters: Array<MonsterFanRank>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type MonsterFanRank = {
  __typename?: 'MonsterFanRank';
  monsterDrink: MonsterDrink;
  monsterFan: MonsterFan;
  rank?: Maybe<RankForMonster>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addNewMonsterFanRank: MonsterFanRank;
  addNewMonsterFlavor: MonsterDrink;
  login: AuthPayload;
  logout: Scalars['Boolean']['output'];
  signup: AuthPayload;
};


export type MutationAddNewMonsterFanRankArgs = {
  canDesignRank: Scalars['Int']['input'];
  monsterDrinkId: Scalars['String']['input'];
  tasteRank: Scalars['Int']['input'];
};


export type MutationAddNewMonsterFlavorArgs = {
  description: Scalars['String']['input'];
  globalRank: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAllMonsterDrinks: Array<MonsterDrink>;
  getMonsterByName?: Maybe<MonsterDrink>;
  getMonsterFanRank: MonsterFanRank;
  getRanksForMonsterFan: Array<MonsterFanRank>;
  getUsersRankForMonster: Array<MonsterFanRank>;
  me?: Maybe<User>;
};


export type QueryGetMonsterByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryGetMonsterFanRankArgs = {
  monsterDrinkId: Scalars['String']['input'];
};


export type QueryGetRanksForMonsterFanArgs = {
  monsterFanId: Scalars['Int']['input'];
};


export type QueryGetUsersRankForMonsterArgs = {
  monsterDrinkId: Scalars['String']['input'];
};

export type RankForMonster = {
  __typename?: 'RankForMonster';
  canDesignRank?: Maybe<Scalars['Int']['output']>;
  tasteRank?: Maybe<Scalars['Int']['output']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;





/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  MonsterDrink: ResolverTypeWrapper<MonsterDrink>;
  MonsterFan: ResolverTypeWrapper<MonsterFan>;
  MonsterFanRank: ResolverTypeWrapper<MonsterFanRank>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  RankForMonster: ResolverTypeWrapper<RankForMonster>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthPayload: AuthPayload;
  Boolean: Scalars['Boolean']['output'];
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  MonsterDrink: MonsterDrink;
  MonsterFan: MonsterFan;
  MonsterFanRank: MonsterFanRank;
  Mutation: Record<PropertyKey, never>;
  Query: Record<PropertyKey, never>;
  RankForMonster: RankForMonster;
  String: Scalars['String']['output'];
  User: User;
};

export type AuthPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};

export type MonsterDrinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['MonsterDrink'] = ResolversParentTypes['MonsterDrink']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  globalRank?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  monsterFanRanks?: Resolver<Array<ResolversTypes['MonsterFanRank']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MonsterFanResolvers<ContextType = any, ParentType extends ResolversParentTypes['MonsterFan'] = ResolversParentTypes['MonsterFan']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rankedMonsters?: Resolver<Array<ResolversTypes['MonsterFanRank']>, ParentType, ContextType>;
  userName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type MonsterFanRankResolvers<ContextType = any, ParentType extends ResolversParentTypes['MonsterFanRank'] = ResolversParentTypes['MonsterFanRank']> = {
  monsterDrink?: Resolver<ResolversTypes['MonsterDrink'], ParentType, ContextType>;
  monsterFan?: Resolver<ResolversTypes['MonsterFan'], ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['RankForMonster']>, ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addNewMonsterFanRank?: Resolver<ResolversTypes['MonsterFanRank'], ParentType, ContextType, RequireFields<MutationAddNewMonsterFanRankArgs, 'canDesignRank' | 'monsterDrinkId' | 'tasteRank'>>;
  addNewMonsterFlavor?: Resolver<ResolversTypes['MonsterDrink'], ParentType, ContextType, RequireFields<MutationAddNewMonsterFlavorArgs, 'description' | 'globalRank' | 'name'>>;
  login?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
  logout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  signup?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationSignupArgs, 'email' | 'password'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAllMonsterDrinks?: Resolver<Array<ResolversTypes['MonsterDrink']>, ParentType, ContextType>;
  getMonsterByName?: Resolver<Maybe<ResolversTypes['MonsterDrink']>, ParentType, ContextType, RequireFields<QueryGetMonsterByNameArgs, 'name'>>;
  getMonsterFanRank?: Resolver<ResolversTypes['MonsterFanRank'], ParentType, ContextType, RequireFields<QueryGetMonsterFanRankArgs, 'monsterDrinkId'>>;
  getRanksForMonsterFan?: Resolver<Array<ResolversTypes['MonsterFanRank']>, ParentType, ContextType, RequireFields<QueryGetRanksForMonsterFanArgs, 'monsterFanId'>>;
  getUsersRankForMonster?: Resolver<Array<ResolversTypes['MonsterFanRank']>, ParentType, ContextType, RequireFields<QueryGetUsersRankForMonsterArgs, 'monsterDrinkId'>>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
};

export type RankForMonsterResolvers<ContextType = any, ParentType extends ResolversParentTypes['RankForMonster'] = ResolversParentTypes['RankForMonster']> = {
  canDesignRank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tasteRank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  MonsterDrink?: MonsterDrinkResolvers<ContextType>;
  MonsterFan?: MonsterFanResolvers<ContextType>;
  MonsterFanRank?: MonsterFanRankResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RankForMonster?: RankForMonsterResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

