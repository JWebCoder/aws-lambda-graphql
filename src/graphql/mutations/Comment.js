'use strict'
const GraphQL = require('graphql')
const {
  GraphQLID,
  GraphQLString,
} = GraphQL
// import the Post type we created
const CommentType = require('../types/Comment')
// import the Post resolver we created
const CommentResolver = require('../resolvers/Comment')
module.exports = {
  index () {
    return {
      type: CommentType,
      description: 'This will create a new comment.',
      args: {
        userId: {
          type: GraphQLID,
          description: 'Please enter the user id',
        },
        message: {
          type: GraphQLString,
          description: 'Please enter the message',
        },
      },
      resolve (parent, args, context, info) {
        return CommentResolver.push(args)
      },
    }
  },
}
