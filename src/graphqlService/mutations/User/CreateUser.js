'use strict'
// import the User type we created
import UserType from 'graphqlService/types/User'
import { GraphQLString } from 'graphql'
import UserResolver from 'graphqlService/resolvers/User'
import Debug from 'debug'

const debug = Debug('poc:graphql-mutation-create-user')

debug('Creating')
export default {
  type: UserType,
  description: 'This will create a new user.',
  args: {
    name: {
      type: GraphQLString,
      description: 'Please enter the user name',
    },
  },
  resolve (parent, args, context, info) {
    return UserResolver.push(args)
  },
}
debug('Created')
