'use strict'
import { GraphQLNonNull, GraphQLID, GraphQLBoolean } from 'graphql'
import UserResolver from 'graphqlService/resolvers/User'
import Debug from 'debug'

const debug = Debug('poc:graphql-mutation-delete-user')

debug('Creating')
export default {
  type: GraphQLBoolean,
  description: 'This will delete a user.',
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Please enter the user id',
    },
  },
  resolve (parent, args, context, info) {
    return UserResolver.delete(args)
  },
}
debug('Created')
