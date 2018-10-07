'use strict'
import UserType from 'graphqlService/types/User'
import {
  GraphQLList,
} from 'graphql'
import UserResolver from 'graphqlService/resolvers/User'

export default {
  type: new GraphQLList(UserType),
  description: 'This will return all the users.',
  resolve (parent, args, context, info) {
    return UserResolver.index(args, context)
  },
}
