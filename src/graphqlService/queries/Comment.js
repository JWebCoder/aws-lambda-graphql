'use strict'
import CommentType from 'graphqlService/types/Comment'
import CommentResolver from 'graphqlService/resolvers/Comment'
import {
  GraphQLList,
  GraphQLID,
} from 'graphql'

export default {
  type: new GraphQLList(CommentType),
  description: 'This will return all the comments.',
  args: {
    userId: {
      type: GraphQLID,
      description: 'Please enter a userId',
    },
  },
  resolve (parent, args, context, info) {
    return CommentResolver.index({ userId: parent.id }, context)
  },
}
