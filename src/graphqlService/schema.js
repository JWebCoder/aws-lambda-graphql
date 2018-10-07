'use strict'
import UserMutations from 'graphqlService/mutations/User'
import Queries from 'graphqlService/queries'
import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql'
import CreateComment from './mutations/CreateComment'
import Debug from 'debug'

const debug = Debug('poc:graphql-schema')
debug('Creating')
// lets define our root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'This is the default root query provided by our application',
  fields: {
    ...Queries,
  },
})

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  description: 'This is the default root mutation provided by our application',
  fields: {
    ...UserMutations,
    CreateComment,
  },
})
// export the schema
debug('Created')
export default new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
})
