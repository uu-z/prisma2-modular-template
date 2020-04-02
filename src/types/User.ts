import { objectType, extendType, ext, inputObjectType } from 'nexus'
import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { stringArg } from 'nexus'
import { APP_SECRET } from '../utils'
import { InputDefinitionBlock } from '@nexus/schema/dist/core'
import { createContext } from '../context'

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.string('token')
    t.field('user', { type: 'User' })
  },
})

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.firstName()
    t.model.lastName()
    t.model.posts({ pagination: true, ordering: true })
  },
})

export const userQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user()
    t.crud.users({
      filtering: true,
      pagination: true,
      ordering: true,
    })
  },
})
export const userMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneUser()
    t.crud.deleteOneUser()
    t.crud.deleteManyUser()
    t.crud.updateOneUser()
    t.crud.updateManyUser()
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        name: stringArg(),
        email: stringArg({ nullable: false }),
        password: stringArg({ nullable: false }),
      },
      resolve: async (_parent, args, ctx) => {
        const { name, email, password, test } = args
        const hashedPassword = await hash(password, 10)
        const user = await ctx.prisma.user.create({
          data: {
            name,
            email,
            password: hashedPassword,
          },
        })
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          user,
        }
      },
    })

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: stringArg({ nullable: false }),
        password: stringArg({ nullable: false }),
      },
      resolve: async (_parent, { email, password }, context) => {
        const user = await context.prisma.user.findOne({
          where: {
            email,
          },
        })
        if (!user) {
          throw new Error(`No user found for email: ${email}`)
        }
        const passwordValid = await compare(password, user.password)
        if (!passwordValid) {
          throw new Error('Invalid password')
        }
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          user,
        }
      },
    })
  },
})
