'use strict'
// import the User type we created
import UserType from 'graphql/types/User'
import { GraphQLNonNull, GraphQLID, GraphQLString } from 'graphql'

// import the User resolver to the specific country
const UserResolver = require(`../../../resolvers/${process.env.TARGET}/User`)
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
