'use strict'
import {
  GraphQLList,
  GraphQLString,
} from 'graphql'
import ProductType from 'graphqlService/types/Product'
import ProductResolver from 'graphqlService/resolvers/Product'

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
