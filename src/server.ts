import { GraphQLServer } from 'graphql-yoga'
import { permissions } from './permissions'
import { schema } from './schema'
import { createContext } from './context'

new GraphQLServer({
  schema,
  context: createContext,
  middlewares: [permissions],
}).start({ tracing: false, port: process.env.PORT || 4000 }, () =>
  console.log(
    `🚀 Server ready at: http://localhost:${process.env.PORT ||
      4000}\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-auth#5-using-the-graphql-api`,
  ),
)
