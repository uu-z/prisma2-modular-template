import { makeMutaion, makeQuery } from '../utils/helper'

export * from './Post'
export * from './User'

export const Query = makeQuery()
export const Mutation = makeMutaion()
