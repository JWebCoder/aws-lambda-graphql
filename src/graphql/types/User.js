'use strict'
const GraphQL = require('graphql')
const Comment = require('./Comment')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} = GraphQL
const UserType = new GraphQLObjectType({
  name: 'user',
  description: 'User Type, For all the users present in fakeDB.',
  fields: {
    id: {
      type: GraphQLID,
      description: 'ID of the user',
    },
    name: {
      type: GraphQLString,
      description: 'Name of the user',
    },
    comments: {
      type: new GraphQLList(Comment),
      description: 'User comments',
    },
  },
})
module.exports = UserType
