import { EventEmitter } from 'events'
import { ObjectDefinitionBlock } from 'nexus/dist/core'
import { mutationType, queryType } from 'nexus'

export const event = new EventEmitter()

export const $Mutation = (
  fn: (t: ObjectDefinitionBlock<'Mutation'>) => void,
) => {
  event.on('Mutation', t => fn(t))
}

export const $Query = (fn: (t: ObjectDefinitionBlock<'Query'>) => void) => {
  event.on('Query', t => fn(t))
}

export const makeMutaion = () =>
  mutationType({
    definition(t) {
      event.emit('Mutation', t)
    },
  })

export const makeQuery = () =>
  queryType({
    definition(t) {
      event.emit('Query', t)
    },
  })
