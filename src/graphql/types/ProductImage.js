'use strict'
const GraphQL = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = GraphQL
const CommentType = new GraphQLObjectType({
  name: 'ProductImage',
  description: 'Comment Type',
  fields: {
    id: {
      type: GraphQLID,
      description: 'ID of the comment',
    },
    small: {
      type: GraphQLString,
      description: 'Small product image',
    },
    medium: {
      type: GraphQLString,
      description: 'Medium product image',
    },
    big: {
      type: GraphQLString,
      description: 'Big product image',
    },
  },
})
module.exports = CommentType
