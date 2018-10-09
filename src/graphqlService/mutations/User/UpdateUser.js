'use strict'
// import the User type we created
import UserType from 'graphqlService/types/User'
import { GraphQLString } from 'graphql'
import UserResolver from 'graphqlService/resolvers/User'
import Debug from 'debug'

const debug = Debug('poc:graphql-mutation-update-user')

debug('Creating')
export default {
  type: UserType,
  description: 'This will update a user.',
  args: {
    name: {
      type: GraphQLString,
      description: 'Please enter the user name',
    },
  },
  resolve (parent, args, context, info) {
    return UserResolver.update(args, context)
  },
}
debug('Created')
