'use strict'
import UserMutations from 'graphql/mutations/User'
import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql'
// import the user query file we created
const PostQuery = require('./queries/Post')
const ProductQuery = require('./queries/Product')
const UserQuery = require('./queries/User')
const CommentQuery = require('./queries/Comment')

const CreateCommentMutation = require('./mutations/CreateComment')
// lets define our root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'This is the default root query provided by our application',
  fields: {
    posts: PostQuery.index(),
    comments: CommentQuery.index(),
    users: UserQuery.index(),
    products: ProductQuery.index(),
  },
})

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  description: 'This is the default root mutation provided by our application',
  fields: {
    ...UserMutations,
    createComment: CreateCommentMutation.index(),
  },
})
// export the schema
export default new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
})
