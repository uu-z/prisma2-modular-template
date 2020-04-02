import { Observable } from 'graphql-typed-client'

export interface Query {
  post: Post | null
  posts: Post[]
  user: User | null
  users: User[]
  __typename: 'Query'
}

/** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
export type String = string

export interface Post {
  id: String
  createdAt: DateTime
  updatedAt: DateTime
  published: Boolean
  title: String
  content: String | null
  author: User | null
  __typename: 'Post'
}

export type DateTime = any

/** The `Boolean` scalar type represents `true` or `false`. */
export type Boolean = boolean

export interface User {
  id: String
  name: String | null
  email: String
  firstName: String | null
  lastName: String | null
  posts: Post[]
  __typename: 'User'
}

export enum OrderByArg {
  asc = 'asc',
  desc = 'desc',
}

/** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
export type Int = number

export interface Mutation {
  createOnePost: Post
  deleteOnePost: Post | null
  deleteManyPost: BatchPayload
  updateManyPost: BatchPayload
  updateOnePost: Post | null
  createOneUser: User
  deleteOneUser: User | null
  deleteManyUser: BatchPayload
  updateOneUser: User | null
  updateManyUser: BatchPayload
  signup: AuthPayload
  login: AuthPayload
  __typename: 'Mutation'
}

export interface BatchPayload {
  count: Int
  __typename: 'BatchPayload'
}

export interface AuthPayload {
  token: String
  user: User
  __typename: 'AuthPayload'
}

export interface QueryRequest {
  post?: [{ where: PostWhereUniqueInput }, PostRequest]
  posts?:
    | [
        {
          where?: PostWhereInput | null
          orderBy?: PostOrderByInput | null
          skip?: Int | null
          after?: PostWhereUniqueInput | null
          before?: PostWhereUniqueInput | null
          first?: Int | null
          last?: Int | null
        },
        PostRequest,
      ]
    | PostRequest
  user?: [{ where: UserWhereUniqueInput }, UserRequest]
  users?:
    | [
        {
          where?: UserWhereInput | null
          orderBy?: UserOrderByInput | null
          skip?: Int | null
          after?: UserWhereUniqueInput | null
          before?: UserWhereUniqueInput | null
          first?: Int | null
          last?: Int | null
        },
        UserRequest,
      ]
    | UserRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PostWhereUniqueInput {
  id?: String | null
}

export interface PostRequest {
  id?: boolean | number
  createdAt?: boolean | number
  updatedAt?: boolean | number
  published?: boolean | number
  title?: boolean | number
  content?: boolean | number
  author?: UserRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UserRequest {
  id?: boolean | number
  name?: boolean | number
  email?: boolean | number
  firstName?: boolean | number
  lastName?: boolean | number
  posts?:
    | [
        {
          orderBy?: PostOrderByInput | null
          skip?: Int | null
          after?: PostWhereUniqueInput | null
          before?: PostWhereUniqueInput | null
          first?: Int | null
          last?: Int | null
        },
        PostRequest,
      ]
    | PostRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PostOrderByInput {
  id?: OrderByArg | null
  createdAt?: OrderByArg | null
  updatedAt?: OrderByArg | null
  published?: OrderByArg | null
  title?: OrderByArg | null
  content?: OrderByArg | null
}

export interface PostWhereInput {
  id?: StringFilter | null
  createdAt?: DateTimeFilter | null
  updatedAt?: DateTimeFilter | null
  published?: BooleanFilter | null
  title?: StringFilter | null
  content?: NullableStringFilter | null
  AND?: PostWhereInput[] | null
  OR?: PostWhereInput[] | null
  NOT?: PostWhereInput[] | null
  author?: UserWhereInput | null
}

export interface StringFilter {
  equals?: String | null
  not?: String | null
  in?: String[] | null
  notIn?: String[] | null
  lt?: String | null
  lte?: String | null
  gt?: String | null
  gte?: String | null
  contains?: String | null
  startsWith?: String | null
  endsWith?: String | null
}

export interface DateTimeFilter {
  equals?: DateTime | null
  not?: DateTime | null
  in?: DateTime[] | null
  notIn?: DateTime[] | null
  lt?: DateTime | null
  lte?: DateTime | null
  gt?: DateTime | null
  gte?: DateTime | null
}

export interface BooleanFilter {
  equals?: Boolean | null
  not?: Boolean | null
}

export interface NullableStringFilter {
  equals?: String | null
  not?: String | null
  in?: String[] | null
  notIn?: String[] | null
  lt?: String | null
  lte?: String | null
  gt?: String | null
  gte?: String | null
  contains?: String | null
  startsWith?: String | null
  endsWith?: String | null
}

export interface UserWhereInput {
  id?: StringFilter | null
  email?: StringFilter | null
  password?: StringFilter | null
  name?: NullableStringFilter | null
  posts?: PostFilter | null
  firstName?: NullableStringFilter | null
  lastName?: NullableStringFilter | null
  AND?: UserWhereInput[] | null
  OR?: UserWhereInput[] | null
  NOT?: UserWhereInput[] | null
}

export interface PostFilter {
  every?: PostWhereInput | null
  some?: PostWhereInput | null
  none?: PostWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: String | null
  email?: String | null
  firstName_lastName?: FirstNameLastNameCompoundUniqueInput | null
}

export interface FirstNameLastNameCompoundUniqueInput {
  firstName: String
  lastName: String
}

export interface UserOrderByInput {
  id?: OrderByArg | null
  email?: OrderByArg | null
  password?: OrderByArg | null
  name?: OrderByArg | null
  firstName?: OrderByArg | null
  lastName?: OrderByArg | null
}

export interface MutationRequest {
  createOnePost?: [{ data: PostCreateInput }, PostRequest]
  deleteOnePost?: [{ where: PostWhereUniqueInput }, PostRequest]
  deleteManyPost?: [{ where?: PostWhereInput | null }, BatchPayloadRequest] | BatchPayloadRequest
  updateManyPost?: [{ data: PostUpdateManyMutationInput; where?: PostWhereInput | null }, BatchPayloadRequest]
  updateOnePost?: [{ data: PostUpdateInput; where: PostWhereUniqueInput }, PostRequest]
  createOneUser?: [{ data: UserCreateInput }, UserRequest]
  deleteOneUser?: [{ where: UserWhereUniqueInput }, UserRequest]
  deleteManyUser?: [{ where?: UserWhereInput | null }, BatchPayloadRequest] | BatchPayloadRequest
  updateOneUser?: [{ data: UserUpdateInput; where: UserWhereUniqueInput }, UserRequest]
  updateManyUser?: [{ data: UserUpdateManyMutationInput; where?: UserWhereInput | null }, BatchPayloadRequest]
  signup?: [{ name?: String | null; email: String; password: String }, AuthPayloadRequest]
  login?: [{ email: String; password: String }, AuthPayloadRequest]
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PostCreateInput {
  id?: String | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  published?: Boolean | null
  title: String
  content?: String | null
  author?: UserCreateOneWithoutPostsInput | null
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutPostsInput {
  id?: String | null
  email: String
  password: String
  name?: String | null
  firstName?: String | null
  lastName?: String | null
}

export interface BatchPayloadRequest {
  count?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PostUpdateManyMutationInput {
  id?: String | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  published?: Boolean | null
  title?: String | null
  content?: String | null
}

export interface PostUpdateInput {
  id?: String | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  published?: Boolean | null
  title?: String | null
  content?: String | null
  author?: UserUpdateOneWithoutPostsInput | null
}

export interface UserUpdateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutPostsDataInput | null
  upsert?: UserUpsertWithoutPostsInput | null
}

export interface UserUpdateWithoutPostsDataInput {
  id?: String | null
  email?: String | null
  password?: String | null
  name?: String | null
  firstName?: String | null
  lastName?: String | null
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput
  create: UserCreateWithoutPostsInput
}

export interface UserCreateInput {
  id?: String | null
  email: String
  password: String
  name?: String | null
  firstName?: String | null
  lastName?: String | null
  posts?: PostCreateManyWithoutAuthorInput | null
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | null
  connect?: PostWhereUniqueInput[] | null
}

export interface PostCreateWithoutAuthorInput {
  id?: String | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  published?: Boolean | null
  title: String
  content?: String | null
}

export interface UserUpdateInput {
  id?: String | null
  email?: String | null
  password?: String | null
  name?: String | null
  firstName?: String | null
  lastName?: String | null
  posts?: PostUpdateManyWithoutAuthorInput | null
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | null
  connect?: PostWhereUniqueInput[] | null
  set?: PostWhereUniqueInput[] | null
  disconnect?: PostWhereUniqueInput[] | null
  delete?: PostWhereUniqueInput[] | null
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | null
  updateMany?: PostUpdateManyWithWhereNestedInput[] | null
  deleteMany?: PostScalarWhereInput[] | null
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | null
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutAuthorDataInput
}

export interface PostUpdateWithoutAuthorDataInput {
  id?: String | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  published?: Boolean | null
  title?: String | null
  content?: String | null
}

export interface PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput
  data: PostUpdateManyDataInput
}

export interface PostScalarWhereInput {
  id?: StringFilter | null
  createdAt?: DateTimeFilter | null
  updatedAt?: DateTimeFilter | null
  published?: BooleanFilter | null
  title?: StringFilter | null
  content?: NullableStringFilter | null
  AND?: PostScalarWhereInput[] | null
  OR?: PostScalarWhereInput[] | null
  NOT?: PostScalarWhereInput[] | null
}

export interface PostUpdateManyDataInput {
  id?: String | null
  createdAt?: DateTime | null
  updatedAt?: DateTime | null
  published?: Boolean | null
  title?: String | null
  content?: String | null
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutAuthorDataInput
  create: PostCreateWithoutAuthorInput
}

export interface UserUpdateManyMutationInput {
  id?: String | null
  email?: String | null
  password?: String | null
  name?: String | null
  firstName?: String | null
  lastName?: String | null
}

export interface AuthPayloadRequest {
  token?: boolean | number
  user?: UserRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

const Query_possibleTypes = ['Query']
export const isQuery = (obj: { __typename: String }): obj is Query => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Query_possibleTypes.includes(obj.__typename)
}

const Post_possibleTypes = ['Post']
export const isPost = (obj: { __typename: String }): obj is Post => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Post_possibleTypes.includes(obj.__typename)
}

const User_possibleTypes = ['User']
export const isUser = (obj: { __typename: String }): obj is User => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return User_possibleTypes.includes(obj.__typename)
}

const Mutation_possibleTypes = ['Mutation']
export const isMutation = (obj: { __typename: String }): obj is Mutation => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Mutation_possibleTypes.includes(obj.__typename)
}

const BatchPayload_possibleTypes = ['BatchPayload']
export const isBatchPayload = (obj: { __typename: String }): obj is BatchPayload => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return BatchPayload_possibleTypes.includes(obj.__typename)
}

const AuthPayload_possibleTypes = ['AuthPayload']
export const isAuthPayload = (obj: { __typename: String }): obj is AuthPayload => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return AuthPayload_possibleTypes.includes(obj.__typename)
}

export interface QueryPromiseChain {
  post: (args: {
    where: PostWhereUniqueInput
  }) => PostPromiseChain & { execute: (request: PostRequest, defaultValue?: Post | null) => Promise<Post | null> }
  posts: ((args?: {
    where?: PostWhereInput | null
    orderBy?: PostOrderByInput | null
    skip?: Int | null
    after?: PostWhereUniqueInput | null
    before?: PostWhereUniqueInput | null
    first?: Int | null
    last?: Int | null
  }) => { execute: (request: PostRequest, defaultValue?: Post[]) => Promise<Post[]> }) & {
    execute: (request: PostRequest, defaultValue?: Post[]) => Promise<Post[]>
  }
  user: (args: {
    where: UserWhereUniqueInput
  }) => UserPromiseChain & { execute: (request: UserRequest, defaultValue?: User | null) => Promise<User | null> }
  users: ((args?: {
    where?: UserWhereInput | null
    orderBy?: UserOrderByInput | null
    skip?: Int | null
    after?: UserWhereUniqueInput | null
    before?: UserWhereUniqueInput | null
    first?: Int | null
    last?: Int | null
  }) => { execute: (request: UserRequest, defaultValue?: User[]) => Promise<User[]> }) & {
    execute: (request: UserRequest, defaultValue?: User[]) => Promise<User[]>
  }
}

export interface QueryObservableChain {
  post: (args: {
    where: PostWhereUniqueInput
  }) => PostObservableChain & { execute: (request: PostRequest, defaultValue?: Post | null) => Observable<Post | null> }
  posts: ((args?: {
    where?: PostWhereInput | null
    orderBy?: PostOrderByInput | null
    skip?: Int | null
    after?: PostWhereUniqueInput | null
    before?: PostWhereUniqueInput | null
    first?: Int | null
    last?: Int | null
  }) => { execute: (request: PostRequest, defaultValue?: Post[]) => Observable<Post[]> }) & {
    execute: (request: PostRequest, defaultValue?: Post[]) => Observable<Post[]>
  }
  user: (args: {
    where: UserWhereUniqueInput
  }) => UserObservableChain & { execute: (request: UserRequest, defaultValue?: User | null) => Observable<User | null> }
  users: ((args?: {
    where?: UserWhereInput | null
    orderBy?: UserOrderByInput | null
    skip?: Int | null
    after?: UserWhereUniqueInput | null
    before?: UserWhereUniqueInput | null
    first?: Int | null
    last?: Int | null
  }) => { execute: (request: UserRequest, defaultValue?: User[]) => Observable<User[]> }) & {
    execute: (request: UserRequest, defaultValue?: User[]) => Observable<User[]>
  }
}

export interface PostPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Promise<DateTime> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Promise<DateTime> }
  published: { execute: (request?: boolean | number, defaultValue?: Boolean) => Promise<Boolean> }
  title: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  content: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  author: UserPromiseChain & { execute: (request: UserRequest, defaultValue?: User | null) => Promise<User | null> }
}

export interface PostObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Observable<DateTime> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Observable<DateTime> }
  published: { execute: (request?: boolean | number, defaultValue?: Boolean) => Observable<Boolean> }
  title: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  content: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  author: UserObservableChain & { execute: (request: UserRequest, defaultValue?: User | null) => Observable<User | null> }
}

export interface UserPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  email: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  firstName: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  lastName: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  posts: ((args?: {
    orderBy?: PostOrderByInput | null
    skip?: Int | null
    after?: PostWhereUniqueInput | null
    before?: PostWhereUniqueInput | null
    first?: Int | null
    last?: Int | null
  }) => { execute: (request: PostRequest, defaultValue?: Post[]) => Promise<Post[]> }) & {
    execute: (request: PostRequest, defaultValue?: Post[]) => Promise<Post[]>
  }
}

export interface UserObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  email: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  firstName: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  lastName: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  posts: ((args?: {
    orderBy?: PostOrderByInput | null
    skip?: Int | null
    after?: PostWhereUniqueInput | null
    before?: PostWhereUniqueInput | null
    first?: Int | null
    last?: Int | null
  }) => { execute: (request: PostRequest, defaultValue?: Post[]) => Observable<Post[]> }) & {
    execute: (request: PostRequest, defaultValue?: Post[]) => Observable<Post[]>
  }
}

export interface MutationPromiseChain {
  createOnePost: (args: {
    data: PostCreateInput
  }) => PostPromiseChain & { execute: (request: PostRequest, defaultValue?: Post) => Promise<Post> }
  deleteOnePost: (args: {
    where: PostWhereUniqueInput
  }) => PostPromiseChain & { execute: (request: PostRequest, defaultValue?: Post | null) => Promise<Post | null> }
  deleteManyPost: ((args?: {
    where?: PostWhereInput | null
  }) => BatchPayloadPromiseChain & {
    execute: (request: BatchPayloadRequest, defaultValue?: BatchPayload) => Promise<BatchPayload>
  }) &
    (BatchPayloadPromiseChain & {
      execute: (request: BatchPayloadRequest, defaultValue?: BatchPayload) => Promise<BatchPayload>
    })
  updateManyPost: (args: {
    data: PostUpdateManyMutationInput
    where?: PostWhereInput | null
  }) => BatchPayloadPromiseChain & {
    execute: (request: BatchPayloadRequest, defaultValue?: BatchPayload) => Promise<BatchPayload>
  }
  updateOnePost: (args: {
    data: PostUpdateInput
    where: PostWhereUniqueInput
  }) => PostPromiseChain & { execute: (request: PostRequest, defaultValue?: Post | null) => Promise<Post | null> }
  createOneUser: (args: {
    data: UserCreateInput
  }) => UserPromiseChain & { execute: (request: UserRequest, defaultValue?: User) => Promise<User> }
  deleteOneUser: (args: {
    where: UserWhereUniqueInput
  }) => UserPromiseChain & { execute: (request: UserRequest, defaultValue?: User | null) => Promise<User | null> }
  deleteManyUser: ((args?: {
    where?: UserWhereInput | null
  }) => BatchPayloadPromiseChain & {
    execute: (request: BatchPayloadRequest, defaultValue?: BatchPayload) => Promise<BatchPayload>
  }) &
    (BatchPayloadPromiseChain & {
      execute: (request: BatchPayloadRequest, defaultValue?: BatchPayload) => Promise<BatchPayload>
    })
  updateOneUser: (args: {
    data: UserUpdateInput
    where: UserWhereUniqueInput
  }) => UserPromiseChain & { execute: (request: UserRequest, defaultValue?: User | null) => Promise<User | null> }
  updateManyUser: (args: {
    data: UserUpdateManyMutationInput
    where?: UserWhereInput | null
  }) => BatchPayloadPromiseChain & {
    execute: (request: BatchPayloadRequest, defaultValue?: BatchPayload) => Promise<BatchPayload>
  }
  signup: (args: {
    name?: String | null
    email: String
    password: String
  }) => AuthPayloadPromiseChain & {
    execute: (request: AuthPayloadRequest, defaultValue?: AuthPayload) => Promise<AuthPayload>
  }
  login: (args: {
    email: String
    password: String
  }) => AuthPayloadPromiseChain & {
    execute: (request: AuthPayloadRequest, defaultValue?: AuthPayload) => Promise<AuthPayload>
  }
}

export interface MutationObservableChain {
  createOnePost: (args: {
    data: PostCreateInput
  }) => PostObservableChain & { execute: (request: PostRequest, defaultValue?: Post) => Observable<Post> }
  deleteOnePost: (args: {
    where: PostWhereUniqueInput
  }) => PostObservableChain & { execute: (request: PostRequest, defaultValue?: Post | null) => Observable<Post | null> }
  deleteManyPost: ((args?: {
    where?: PostWhereInput | null
  }) => BatchPayloadObservableChain & {
    execute: (request: BatchPayloadRequest, defaultValue?: BatchPayload) => Observable<BatchPayload>
  }) &
    (BatchPayloadObservableChain & {
      execute: (request: BatchPayloadRequest, defaultValue?: BatchPayload) => Observable<BatchPayload>
    })
  updateManyPost: (args: {
    data: PostUpdateManyMutationInput
    where?: PostWhereInput | null
  }) => BatchPayloadObservableChain & {
    execute: (request: BatchPayloadRequest, defaultValue?: BatchPayload) => Observable<BatchPayload>
  }
  updateOnePost: (args: {
    data: PostUpdateInput
    where: PostWhereUniqueInput
  }) => PostObservableChain & { execute: (request: PostRequest, defaultValue?: Post | null) => Observable<Post | null> }
  createOneUser: (args: {
    data: UserCreateInput
  }) => UserObservableChain & { execute: (request: UserRequest, defaultValue?: User) => Observable<User> }
  deleteOneUser: (args: {
    where: UserWhereUniqueInput
  }) => UserObservableChain & { execute: (request: UserRequest, defaultValue?: User | null) => Observable<User | null> }
  deleteManyUser: ((args?: {
    where?: UserWhereInput | null
  }) => BatchPayloadObservableChain & {
    execute: (request: BatchPayloadRequest, defaultValue?: BatchPayload) => Observable<BatchPayload>
  }) &
    (BatchPayloadObservableChain & {
      execute: (request: BatchPayloadRequest, defaultValue?: BatchPayload) => Observable<BatchPayload>
    })
  updateOneUser: (args: {
    data: UserUpdateInput
    where: UserWhereUniqueInput
  }) => UserObservableChain & { execute: (request: UserRequest, defaultValue?: User | null) => Observable<User | null> }
  updateManyUser: (args: {
    data: UserUpdateManyMutationInput
    where?: UserWhereInput | null
  }) => BatchPayloadObservableChain & {
    execute: (request: BatchPayloadRequest, defaultValue?: BatchPayload) => Observable<BatchPayload>
  }
  signup: (args: {
    name?: String | null
    email: String
    password: String
  }) => AuthPayloadObservableChain & {
    execute: (request: AuthPayloadRequest, defaultValue?: AuthPayload) => Observable<AuthPayload>
  }
  login: (args: {
    email: String
    password: String
  }) => AuthPayloadObservableChain & {
    execute: (request: AuthPayloadRequest, defaultValue?: AuthPayload) => Observable<AuthPayload>
  }
}

export interface BatchPayloadPromiseChain {
  count: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
}

export interface BatchPayloadObservableChain {
  count: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
}

export interface AuthPayloadPromiseChain {
  token: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  user: UserPromiseChain & { execute: (request: UserRequest, defaultValue?: User) => Promise<User> }
}

export interface AuthPayloadObservableChain {
  token: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  user: UserObservableChain & { execute: (request: UserRequest, defaultValue?: User) => Observable<User> }
}
