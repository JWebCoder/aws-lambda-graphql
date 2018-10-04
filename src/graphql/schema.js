'use strict'
const GraphQL = require('graphql')
const {
  GraphQLObjectType,
  GraphQLSchema,
} = GraphQL
// import the user query file we created
const PostQuery = require('./queries/Post')
const UserQuery = require('./queries/User')
const UserMutation = require('./mutations/User')
const CommentMutation = require('./mutations/Comment')
// lets define our root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'This is the default root query provided by our application',
  fields: {
    posts: PostQuery.index(),
    users: UserQuery.index(),
  },
})

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  description: 'This is the default root mutation provided by our application',
  fields: {
    users: UserMutation.index(),
    comments: CommentMutation.index(),
  },
})
// export the schema
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
})
