'use strict'
import CommentType from 'graphql/types/Comment'
import {
  GraphQLList,
  GraphQLID,
} from 'graphql'
// import the Post type we created

// import the Post resolver we created
const CommentResolver = require('resolvers/Comment')
module.exports = {
  index () {
    return {
      type: new GraphQLList(CommentType),
      description: 'This will return all the comments.',
      args: {
        userId: {
          type: GraphQLID,
          description: 'Please enter a userId',
        },
      },
      resolve (parent, args, context, info) {
        return CommentResolver.index({ userId: parent.id })
      },
    }
  },
}
