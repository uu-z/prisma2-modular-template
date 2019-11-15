import { objectType } from 'nexus'
import { $Query, $Mutation } from '../utils/helper'

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

$Query(t => {
  t.crud.post()
  t.crud.posts({
    filtering: true,
    pagination: true,
    ordering: true,
  })
})

$Mutation(t => {
  t.crud.createOnePost()
  t.crud.deleteOnePost()
  t.crud.deleteManyPost()
  t.crud.updateManyPost()
  t.crud.updateOnePost()
})
