import { GraphQLResolveInfo } from 'graphql'
export type Maybe<T> = T | undefined
export type InputMaybe<T> = T | undefined
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type MonsterDrink = {
  __typename?: 'MonsterDrink'
  description: Scalars['String']['output']
  globalRank: Scalars['Float']['output']
  name: Scalars['String']['output']
  userRank?: Maybe<Scalars['Float']['output']>
}

export type MonsterFan = {
  __typename?: 'MonsterFan'
  id: Scalars['Int']['output']
  password: Scalars['String']['output']
  rankedMonsters: Array<MonsterDrink>
  userName?: Maybe<Scalars['String']['output']>
}

export type Query = {
  __typename?: 'Query'
  getMonsterByName?: Maybe<MonsterDrink>
  logInByNameAndPassword: Scalars['Boolean']['output']
}

export type QueryGetMonsterByNameArgs = {
  name: Scalars['String']['input']
}

export type QueryLogInByNameAndPasswordArgs = {
  password: Scalars['String']['input']
  userName: Scalars['String']['input']
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<
  TResult,
  TParent = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
  TArgs = Record<PropertyKey, never>,
> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
  TArgs = Record<PropertyKey, never>,
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<
  TTypes,
  TParent = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<
  T = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = Record<PropertyKey, never>,
  TParent = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
  TArgs = Record<PropertyKey, never>,
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>
  Float: ResolverTypeWrapper<Scalars['Float']['output']>
  Int: ResolverTypeWrapper<Scalars['Int']['output']>
  MonsterDrink: ResolverTypeWrapper<MonsterDrink>
  MonsterFan: ResolverTypeWrapper<MonsterFan>
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>
  String: ResolverTypeWrapper<Scalars['String']['output']>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output']
  Float: Scalars['Float']['output']
  Int: Scalars['Int']['output']
  MonsterDrink: MonsterDrink
  MonsterFan: MonsterFan
  Query: Record<PropertyKey, never>
  String: Scalars['String']['output']
}

export type MonsterDrinkResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MonsterDrink'] = ResolversParentTypes['MonsterDrink'],
> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  globalRank?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  userRank?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
}

export type MonsterFanResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MonsterFan'] = ResolversParentTypes['MonsterFan'],
> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  rankedMonsters?: Resolver<Array<ResolversTypes['MonsterDrink']>, ParentType, ContextType>
  userName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  getMonsterByName?: Resolver<
    Maybe<ResolversTypes['MonsterDrink']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetMonsterByNameArgs, 'name'>
  >
  logInByNameAndPassword?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<QueryLogInByNameAndPasswordArgs, 'password' | 'userName'>
  >
}

export type Resolvers<ContextType = any> = {
  MonsterDrink?: MonsterDrinkResolvers<ContextType>
  MonsterFan?: MonsterFanResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
}
