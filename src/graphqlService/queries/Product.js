'use strict'
import {
  GraphQLList,
  GraphQLString,
} from 'graphql'
import { ProductType } from 'graphqlService/types'
import { ProductResolver } from 'graphqlService/resolvers'
import Debug from 'debug'

const debug = Debug('poc:graphql-query-product')

debug('Creating')
export default {
  type: new GraphQLList(ProductType),
  description: 'This will return all the posts we find in the given subreddit.',
  args: {
    subreddit: {
      type: GraphQLString,
      description: 'Please enter subreddit name',
    },
  },
  resolve (parent, args, context, info) {
    return ProductResolver.index(args, context)
  },
}
debug('Created')
