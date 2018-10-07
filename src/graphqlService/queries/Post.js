'use strict'
import PostType from 'graphqlService/types/Post'
import PostResolver from 'graphqlService/resolvers/Post'
import {
  GraphQLList,
  GraphQLString,
} from 'graphql'

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
