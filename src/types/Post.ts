import { objectType, extendType } from 'nexus'

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.published()
    t.model.title()
    t.model.content()
    t.model.author()
  },
})

export const PostQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.post()
    t.crud.posts({
      filtering: true,
      pagination: true,
      ordering: true,
    })
  },
})

export const PostMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnePost()
    t.crud.deleteOnePost()
    t.crud.deleteManyPost()
    t.crud.updateManyPost()
    t.crud.updateOnePost()
  },
})
