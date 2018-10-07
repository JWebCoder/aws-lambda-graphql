'use strict'
import { PostType } from 'graphqlService/types'
import { PostResolver } from 'graphqlService/resolvers'
import {
  GraphQLList,
  GraphQLString,
} from 'graphql'
import Debug from 'debug'

const debug = Debug('poc:graphql-query-post')

debug('Creating')
export default {
  type: new GraphQLList(PostType),
  description: 'This will return all the posts we find in the given subreddit.',
  args: {
    subreddit: {
      type: GraphQLString,
      description: 'Please enter subreddit name',
    },
  },
  resolve (parent, args, context, info) {
    return PostResolver.index(args, context)
  },
}
debug('Created')
