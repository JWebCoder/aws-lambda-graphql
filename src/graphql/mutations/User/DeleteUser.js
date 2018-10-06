'use strict'
import { GraphQLNonNull, GraphQLID, GraphQLBoolean } from 'graphql'

// import the User resolver to the specific country
const UserResolver = require(`../../../resolvers/${process.env.TARGET}/User`)
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
