'use strict'
// import the User type we created
import UserType from 'graphqlService/types/User'
import { GraphQLNonNull, GraphQLID, GraphQLString } from 'graphql'
import UserResolver from 'graphqlService/resolvers/User'

export default {
  type: UserType,
  description: 'This will update a user.',
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Please enter the user id',
    },
    name: {
      type: GraphQLString,
      description: 'Please enter the user name',
    },
  },
  resolve (parent, args, context, info) {
    return UserResolver.update(args)
  },
}
