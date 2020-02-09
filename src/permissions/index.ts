import { rule, shield } from 'graphql-shield'
import { getUser } from '../utils'

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const { userId } = getUser(context)
    return Boolean(userId)
  }),
  isPostOwner: rule()(async (parent, { id }, context) => {
    const { userId } = getUser(context)
    const author = await context.prisma.post
      .findOne({
        where: {
          id,
        },
      })
      .author()
    return userId === author.id
  }),
}

export const permissions = shield({
  Query: {},
  Mutation: {},
})
