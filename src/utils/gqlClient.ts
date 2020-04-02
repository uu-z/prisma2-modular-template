import { createClient } from '../generated/gqlClient/createClient'
import { request } from 'graphql-request'

export const gqlClient = createClient({
  fetcher: ({ query, variables }) =>
    request('http://localhost:4000', query, variables).then(data => ({ data })),
})

gqlClient.chain.query
  .users()
  .execute({
    id: 1,
    firstName: 1,
    lastName: 1,
  })
  .then(data => {
    console.log(data)
  })
