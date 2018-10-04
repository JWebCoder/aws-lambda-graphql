'use strict'
const GraphQL = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = GraphQL
const CommentType = new GraphQLObjectType({
  name: 'comment',
  description: 'Comment Type',
  fields: {
    id: {
      type: GraphQLID,
      description: 'ID of the comment',
    },
    userId: {
      type: GraphQLID,
      description: 'ID of the user',
    },
    message: {
      type: GraphQLString,
      description: 'Comment message',
    },
  },
})
module.exports = CommentType
